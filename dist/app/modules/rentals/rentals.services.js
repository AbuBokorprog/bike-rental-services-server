"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsServices = void 0;
const rentals_model_1 = require("./rentals.model");
const createRentals = async (payload) => {
    const data = await rentals_model_1.rentals.create(payload);
    return data;
};
const returnBike = async (id, payload) => {
    console.log(payload);
};
const getAllRentals = async () => {
    const data = await rentals_model_1.rentals.find();
    return data;
};
exports.rentalsServices = { createRentals, returnBike, getAllRentals };
