"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const coupon_services_1 = require("./coupon.services");
const createCoupon = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await coupon_services_1.couponServices.createCoupon(req.body);
    (0, successResponse_1.default)(res, {
        success: false,
        statusCode: http_status_1.default.OK,
        message: 'Created coupon successfully!',
        data,
    });
});
const retrieveAllCoupon = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await coupon_services_1.couponServices.retrieveAllCoupon();
    (0, successResponse_1.default)(res, {
        success: false,
        statusCode: http_status_1.default.OK,
        message: 'Retrieve all coupon successfully!',
        data,
    });
});
const retrieveSingleCoupon = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await coupon_services_1.couponServices.retrieveSingleCoupon(id);
    (0, successResponse_1.default)(res, {
        success: false,
        statusCode: http_status_1.default.OK,
        message: 'Retrieve single coupon successfully!',
        data,
    });
});
const updateCoupon = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await coupon_services_1.couponServices.updateCoupon(id, req.body);
    (0, successResponse_1.default)(res, {
        success: false,
        statusCode: http_status_1.default.OK,
        message: 'Update coupon successfully!',
        data,
    });
});
const deleteCoupon = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await coupon_services_1.couponServices.deleteCoupon(id);
    (0, successResponse_1.default)(res, {
        success: false,
        statusCode: http_status_1.default.OK,
        message: 'Deleted coupon successfully!',
        data,
    });
});
exports.couponController = {
    createCoupon,
    retrieveAllCoupon,
    updateCoupon,
    deleteCoupon,
    retrieveSingleCoupon,
};
