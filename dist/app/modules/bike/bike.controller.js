"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeControllers = void 0;
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const bike_services_1 = require("./bike.services");
const http_status_1 = __importDefault(require("http-status"));
const createBike = (0, catch_async_1.catchAsync)(async (req, res) => {
    const body = req.body;
    const data = await bike_services_1.bikeServices.createBike(body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Bike added successfully!',
        data,
    });
});
const retrieveAllBike = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await bike_services_1.bikeServices.retrieveAllBikes(req.query);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Bikes retrieved successfully',
        data,
    });
});
const updateBike = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const data = await bike_services_1.bikeServices.updateBikes(id, body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Bike updated successfully',
        data,
    });
});
const deleteBike = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await bike_services_1.bikeServices.deleteBikes(id);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Bike deleted successfully',
        data,
    });
});
exports.bikeControllers = {
    createBike,
    retrieveAllBike,
    updateBike,
    deleteBike,
};
