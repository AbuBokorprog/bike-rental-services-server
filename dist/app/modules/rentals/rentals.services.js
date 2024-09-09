"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsServices = void 0;
const mongoose_1 = require("mongoose");
const http_status_1 = __importDefault(require("http-status"));
const bike_model_1 = require("../bike/bike.model");
const rentals_model_1 = require("./rentals.model");
const AppError_1 = require("../../errors/AppError");
const users_model_1 = require("../users/users.model");
const QueryBuilder_1 = require("../../builder/QueryBuilder");
// Create rental
const createRentals = async (email, payload) => {
    const session = await (0, mongoose_1.startSession)();
    // get specific user
    const user = await users_model_1.userModel.findOne({ email: email });
    // if user not exist
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized, Please sign up');
    }
    // check is startTime same to previous rentals startTime
    const existingRentalBikes = await rentals_model_1.rentals.findOne({
        startTime: payload.startTime,
        userId: user?._id,
    });
    // check the users rentals is not return
    const existingRentalNotReturnYet = await rentals_model_1.rentals.findOne({
        userId: user?._id,
        isReturned: false,
    });
    //  if startTime same to previous rentals startTime.
    // if users previous rentals is not return.
    if ((existingRentalBikes && existingRentalBikes?.isReturned == false) ||
        existingRentalNotReturnYet) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "You are already renting a bike but you didn't return, Before renting a new bike you have to return your previous bike!");
    }
    try {
        session.startTransaction();
        payload.userId = user?._id;
        const data = await rentals_model_1.rentals.create([payload], { session });
        if (!data) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Rental created failed!');
        }
        const updateBike = await bike_model_1.Bike.findByIdAndUpdate(payload.bikeId, { isAvailable: true }, { new: true, runValidators: true, session });
        if (!updateBike) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Bike update failed!');
        }
        await session.commitTransaction();
        session.endSession();
        return data;
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Rental create failed!');
    }
};
// Advance Payment
const advancePayment = async (amount, id) => {
    const session = await (0, mongoose_1.startSession)();
    const isRentalBike = await rentals_model_1.rentals.findById(id);
    if (!isRentalBike) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'The Rental bike is not exist!');
    }
    const bike = await bike_model_1.Bike.findById(isRentalBike?.bikeId);
    if (!bike) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'The Rental bike is not exist!');
    }
    try {
        session.startTransaction();
        const advancePayment = await rentals_model_1.rentals.findByIdAndUpdate(id, { advancePayment: amount }, { session, new: true });
        if (!advancePayment) {
            throw new AppError_1.AppError(500, 'Advance payment failed! please try again!');
        }
        isRentalBike.isAdvancePaymentPaid = true;
        isRentalBike.isConfirm = true;
        await isRentalBike.save({ session });
        await bike_model_1.Bike.findByIdAndUpdate(bike?._id, { isAvailable: false }, { session, new: true });
        await session.commitTransaction();
        session.endSession();
        return advancePayment;
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw new AppError_1.AppError(500, 'Advance payment failed! please try again!');
    }
};
// Return rentals
const returnBike = async (id) => {
    // find current rentals
    const currentRentals = await rentals_model_1.rentals.findById(id);
    const bikeId = currentRentals?.bikeId;
    if (!currentRentals) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    //   find bike by id
    const rentalsBike = await bike_model_1.Bike.findById(bikeId);
    if (!rentalsBike) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Bike No Data Found');
    }
    const pricePerHour = rentalsBike?.pricePerHour;
    const startTime = new Date(currentRentals?.startTime);
    //  current time
    const returnTime = new Date();
    // hours of rent
    const differenceTime = returnTime.getTime() - startTime.getTime();
    const differenceInHours = (differenceTime / (1000 * 60 * 60)).toFixed(2);
    //   total cost
    const totalCost = (Number(differenceInHours) * Number(pricePerHour)).toFixed(2);
    const duePayment = (Number(totalCost) - currentRentals.advancePayment).toFixed();
    const session = await (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const updateRental = await rentals_model_1.rentals
            .findByIdAndUpdate(id, { returnTime, totalCost, isReturned: true, duePayment }, { new: true, runValidators: true, session })
            .select({ createdAt: 0, updatedAt: 0 });
        if (!updateRental) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Rental update failed!');
        }
        const isAvailableUpdate = await bike_model_1.Bike.findByIdAndUpdate(currentRentals?.bikeId, { isAvailable: true }, { new: true, runValidators: true, session });
        if (!isAvailableUpdate) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Bike availability update failed!');
        }
        await session.commitTransaction();
        session.endSession();
        return updateRental;
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Return rental failed!');
    }
};
const paymentRental = async (id) => {
    // const session = await startSession()
    const isExistRental = await rentals_model_1.rentals.findById(id);
    if (!isExistRental) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'The rental not exist!');
    }
    try {
        // session.startTransaction()
        isExistRental.paymentStatus = 'Paid';
        isExistRental.duePayment = 0;
        await isExistRental.save();
        return isExistRental;
    }
    catch (error) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, 'Payment failed!');
        //  await session.abortTransaction();
        //  await session.endSession()
    }
};
const retrieveRentals = async (email) => {
    const user = await users_model_1.userModel.findOne({ email: email });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'User not found');
    }
    const data = await rentals_model_1.rentals
        .find({ userId: user?._id })
        .select({ createdAt: 0, updatedAt: 0 })
        .populate('bikeId');
    if (!data) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User's Rental Bike not found");
    }
    return data;
};
const retrieveSingleRentals = async (id) => {
    const data = await rentals_model_1.rentals
        .findById(id)
        .select({ createdAt: 0, updatedAt: 0 })
        .populate('bikeId');
    if (!data) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    return data;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const retrieveAllRentals = async (query) => {
    const allRentals = new QueryBuilder_1.QueryBuilder(rentals_model_1.rentals.find().populate('bikeId'), query)
        .search(['bikeId'])
        .filter()
        .sort()
        .paginate()
        .field();
    const result = await allRentals.modelQuery;
    const meta = await allRentals.countTotal();
    return { result, meta };
};
exports.rentalsServices = {
    createRentals,
    returnBike,
    retrieveRentals,
    advancePayment,
    retrieveAllRentals,
    paymentRental,
    retrieveSingleRentals,
};
