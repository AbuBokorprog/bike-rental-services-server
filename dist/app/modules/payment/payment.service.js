"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentServices = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const paymentUtils_1 = require("./paymentUtils");
const rentals_model_1 = require("../rentals/rentals.model");
const bike_model_1 = require("../bike/bike.model");
const AppError_1 = require("../../errors/AppError");
const http_status_1 = __importDefault(require("http-status"));
const confirmationService = async (transactionId) => {
    const verifyResponse = await (0, paymentUtils_1.verifyPayment)(transactionId);
    const isExistRental = await rentals_model_1.rentals.findOne({ tran_id: transactionId });
    if (!isExistRental) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'Rental not found!');
    }
    const isExistBike = await bike_model_1.Bike.findById(isExistRental?.bikeId);
    if (verifyResponse && verifyResponse.pay_status === 'Successful') {
        if (isExistRental &&
            isExistRental?.isAdvancePaymentPaid === true &&
            isExistRental.isConfirm === true) {
            await rentals_model_1.rentals.findOneAndUpdate({ tran_id: transactionId }, {
                paymentStatus: 'Paid',
                duePayment: 0,
            }, {
                new: true,
                runValidators: true,
            });
            if (isExistBike) {
                isExistBike.isAvailable = true;
                await isExistBike.save();
            }
        }
        else {
            await rentals_model_1.rentals.findOneAndUpdate({ tran_id: transactionId }, {
                isAdvancePaymentPaid: true,
                isConfirm: true,
            }, {
                new: true,
                runValidators: true,
            });
            if (isExistBike) {
                isExistBike.isAvailable = false;
                await isExistBike.save();
            }
        }
    }
    // eslint-disable-next-line no-undef
    const filePath = (0, path_1.join)(__dirname, '../../view/payment-successfull.html');
    const template = (0, fs_1.readFileSync)(filePath, 'utf-8');
    return template;
};
const failedPayment = async () => {
    // eslint-disable-next-line no-undef
    const filePath = (0, path_1.join)(__dirname, '../../view/payment-failed.html');
    const template = (0, fs_1.readFileSync)(filePath, 'utf-8');
    return template;
};
exports.paymentServices = {
    confirmationService,
    failedPayment,
};
