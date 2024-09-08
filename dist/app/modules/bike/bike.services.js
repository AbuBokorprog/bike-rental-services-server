"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeServices = void 0;
const QueryBuilder_1 = require("../../builder/QueryBuilder");
const AppError_1 = require("../../errors/AppError");
const bike_constants_1 = require("./bike.constants");
const bike_model_1 = require("./bike.model");
const http_status_1 = __importDefault(require("http-status"));
const createBike = async (payload) => {
    const data = await bike_model_1.Bike.create(payload);
    return data;
};
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const retrieveAllBikes = async (query) => {
    const allBikes = new QueryBuilder_1.QueryBuilder(bike_model_1.Bike.find(), query)
        .search(bike_constants_1.bikeSearchableFields)
        .filter()
        .sort()
        .paginate()
        .field();
    const data = await allBikes.modelQuery;
    const meta = await allBikes.countTotal();
    if (!data) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    return { data, meta };
};
const retrieveSingleBike = async (id) => {
    const data = bike_model_1.Bike.findById(id);
    return data;
};
const updateBikes = async (id, payload) => {
    // check is bike exist?
    const isBikeExist = await bike_model_1.Bike.findById(id);
    if (!isBikeExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    const data = await bike_model_1.Bike.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    }).select({ createdAt: 0, updatedAt: 0 });
    return data;
};
const deleteBikes = async (id) => {
    const isBikeExist = await bike_model_1.Bike.findById(id);
    if (!isBikeExist) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    const data = await bike_model_1.Bike.findByIdAndDelete(id).select({
        createdAt: 0,
        updatedAt: 0,
    });
    return data;
};
exports.bikeServices = {
    createBike,
    retrieveAllBikes,
    retrieveSingleBike,
    updateBikes,
    deleteBikes,
};
