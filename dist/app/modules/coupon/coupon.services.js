"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../errors/AppError");
const coupon_model_1 = require("./coupon.model");
const createCoupon = async (payload) => {
    const result = await coupon_model_1.coupon.create(payload);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Coupon created failed!');
    }
    return result;
};
const retrieveAllCoupon = async () => {
    const result = await coupon_model_1.coupon.find();
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Retrieve coupon failed!');
    }
    return result;
};
const retrieveSingleCoupon = async (id) => {
    const result = await coupon_model_1.coupon.findById(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Retrieve single coupon failed!');
    }
    return result;
};
const updateCoupon = async (id, payload) => {
    const result = await coupon_model_1.coupon.findByIdAndUpdate(id, { payload });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Coupon update failed!');
    }
    return result;
};
const deleteCoupon = async (id) => {
    const result = await coupon_model_1.coupon.findByIdAndDelete(id);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Coupon deleted failed!');
    }
    return result;
};
exports.couponServices = {
    createCoupon,
    retrieveAllCoupon,
    updateCoupon,
    deleteCoupon,
    retrieveSingleCoupon,
};
