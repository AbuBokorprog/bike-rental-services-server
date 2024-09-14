"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparisonServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../errors/AppError");
const comparison_model_1 = require("./comparison.model");
const createComparison = async (payload) => {
    const result = await comparison_model_1.comparison.create(payload);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Coupon created failed!');
    }
    return result;
};
const retrieveAllComparison = async () => {
    const result = await comparison_model_1.comparison.find().populate('userId').populate('bikeId');
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Retrieve coupon failed!');
    }
    return result;
};
const retrieveSingleComparison = async (id) => {
    const result = await comparison_model_1.comparison.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Retrieve single coupon failed!');
    }
    return result;
};
const updateComparison = async (id, payload) => {
    const result = await comparison_model_1.comparison.findByIdAndUpdate(id, { payload });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Coupon update failed!');
    }
    return result;
};
const deleteComparison = async (id) => {
    const result = await comparison_model_1.comparison.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Coupon deleted failed!');
    }
    return result;
};
exports.comparisonServices = {
    createComparison,
    retrieveAllComparison,
    updateComparison,
    deleteComparison,
    retrieveSingleComparison,
};
