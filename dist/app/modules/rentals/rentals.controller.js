"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsController = void 0;
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const rentals_services_1 = require("./rentals.services");
const http_status_1 = __importDefault(require("http-status"));
const createRental = (0, catch_async_1.catchAsync)(async (req, res) => {
    const body = req.body;
    const user = req.user;
    const data = await rentals_services_1.rentalsServices.createRentals(user?.email, body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rental created successfully',
        data,
    });
});
const advancePayment = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { amount } = req.body;
    const { id } = req.params;
    const data = await rentals_services_1.rentalsServices.advancePayment(amount, id);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Advance payment successfully!',
        data,
    });
});
// all rentals
const retrieveAllRentals = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await rentals_services_1.rentalsServices.retrieveAllRentals(req.query);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve successfully!',
        data,
    });
});
const retrieveSingleRentals = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await rentals_services_1.rentalsServices.retrieveSingleRentals(id);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve successfully!',
        data,
    });
});
// specific user's rentals
const getAllRentals = (0, catch_async_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const data = await rentals_services_1.rentalsServices.retrieveRentals(user?.email);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Rentals retrieved successfully',
        data,
    });
});
const returnBike = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await rentals_services_1.rentalsServices.returnBike(id);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Bike returned successfully',
        data,
    });
});
const paymentRental = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await rentals_services_1.rentalsServices.paymentRental(id);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Payment successfully!',
        data,
    });
});
exports.rentalsController = {
    createRental,
    getAllRentals,
    returnBike,
    advancePayment,
    retrieveAllRentals,
    paymentRental,
    retrieveSingleRentals,
};
