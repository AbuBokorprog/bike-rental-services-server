"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServices = void 0;
const AppError_1 = require("../../errors/AppError");
const bike_model_1 = require("./bike.model");
const http_status_1 = __importDefault(require("http-status"));
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
    // check is bike exist?
    const isBikeExist = await bike_model_1.Bike.findById(id);
    if (!isBikeExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Bike is no found!');
    }
    const data = await bike_model_1.Bike.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return data;
};
const deleteBikes = async (id) => {
    const isBikeExist = await bike_model_1.Bike.findById(id);
    if (!isBikeExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Bike is no found!');
    }
    const data = await bike_model_1.Bike.findByIdAndDelete(id);
    return data;
};
exports.bikeServices = {
    createBike,
    retrieveAllBikes,
    updateBikes,
    deleteBikes,
};
