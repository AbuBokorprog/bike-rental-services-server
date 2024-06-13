"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsController = void 0;
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const rentals_services_1 = require("./rentals.services");
const createRental = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { body } = req.body;
    const data = await rentals_services_1.rentalsServices.createRentals(body);
    (0, successResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'create rentals successfully!',
        data,
    });
});
const getAllRentals = (0, catch_async_1.catchAsync)(async (req, res) => {
    // const userEmail = req.user;
    const data = await rentals_services_1.rentalsServices.getAllRentals(req.query);
    (0, successResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Retrieve rentals successfully!',
        data,
    });
});
const returnBike = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await rentals_services_1.rentalsServices.returnBike(id);
    (0, successResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'create rentals successfully!',
        data,
    });
});
exports.rentalsController = { createRental, getAllRentals, returnBike };
