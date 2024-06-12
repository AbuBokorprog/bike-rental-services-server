"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsServices = void 0;
const bike_model_1 = require("../bike/bike.model");
const rentals_model_1 = require("./rentals.model");
const createRentals = async (payload) => {
    const data = await rentals_model_1.rentals.create(payload);
    const updateBike = await bike_model_1.Bike.findByIdAndUpdate(payload.bikeId, { isAvailable: false }, { new: true, runValidators: true });
    return data;
};
const returnBike = async (id) => {
    // find current rentals
    const currentRentals = await rentals_model_1.rentals.findById(id);
    const bikeId = currentRentals?.bikeId;
    //   find bike by id
    const rentalsBike = await bike_model_1.Bike.findById(bikeId);
    const pricePerHour = rentalsBike?.pricePerHour;
    const startTime = new Date(currentRentals?.startTime);
    //  current time
    const returnTime = new Date();
    // hours of rent
    const differenceTime = returnTime.getTime() - startTime.getTime();
    const differenceInHours = (differenceTime / (1000 * 60 * 60)).toFixed(2);
    //   total cost
    const totalCost = (Number(differenceInHours) * Number(pricePerHour)).toFixed(2);
    const updateRental = await rentals_model_1.rentals.findByIdAndUpdate(id, { returnTime, totalCost, isReturned: true }, { new: true, runValidators: true });
    const isAvailableUpdate = await bike_model_1.Bike.findByIdAndUpdate(currentRentals?.bikeId, { isAvailable: true }, { new: true, runValidators: true });
    console.log(isAvailableUpdate, updateRental);
    return updateRental;
};
const getAllRentals = async () => {
    const data = await rentals_model_1.rentals.find();
    return data;
};
exports.rentalsServices = { createRentals, returnBike, getAllRentals };
