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
// import { JwtPayload } from 'jsonwebtoken';
const createRentals = async (email, payload) => {
    const session = await (0, mongoose_1.startSession)();
    const user = await users_model_1.userModel.findOne({ email: email });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'You are unauthorized, Please sign up');
    }
    try {
        session.startTransaction();
        payload.userId = user?._id;
        const data = await rentals_model_1.rentals.create([payload], { session });
        if (!data) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Rental created failed!');
        }
        const updateBike = await bike_model_1.Bike.findByIdAndUpdate(payload.bikeId, { isAvailable: false }, { new: true, runValidators: true, session });
        if (!updateBike) {
            throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Bike not found!');
        }
        await session.commitTransaction();
        session.endSession();
        return data;
    }
    catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.log(error);
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Rental create failed!');
    }
};
const returnBike = async (id) => {
    // find current rentals
    const currentRentals = await rentals_model_1.rentals.findById(id);
    const bikeId = currentRentals?.bikeId;
    if (!currentRentals) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Rental is no found!');
    }
    //   find bike by id
    const rentalsBike = await bike_model_1.Bike.findById(bikeId);
    if (!rentalsBike) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Bike is no found!');
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
    const session = await (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const updateRental = await rentals_model_1.rentals.findByIdAndUpdate(id, { returnTime, totalCost, isReturned: true }, { new: true, runValidators: true, session });
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
const retrieveRentals = async (email) => {
    const user = await users_model_1.userModel.findOne({ email: email });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Found');
    }
    const data = await rentals_model_1.rentals.find({ userId: user?._id });
    return data;
};
exports.rentalsServices = { createRentals, returnBike, retrieveRentals };
