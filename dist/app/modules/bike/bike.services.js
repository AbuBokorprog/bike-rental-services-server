"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServices = void 0;
const bike_model_1 = require("./bike.model");
const createBike = async (payload) => {
    const data = await bike_model_1.Bike.create(payload);
    return data;
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const retrieveAllBikes = async (query) => {
    const data = await bike_model_1.Bike.find();
    return data;
};
const updateBikes = async (id, payload) => {
    const data = await bike_model_1.Bike.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return data;
};
const deleteBikes = async (id) => {
    const data = await bike_model_1.Bike.findByIdAndDelete(id);
    return data;
};
exports.bikeServices = {
    createBike,
    retrieveAllBikes,
    updateBikes,
    deleteBikes,
};
