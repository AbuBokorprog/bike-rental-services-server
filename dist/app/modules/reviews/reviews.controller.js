"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const reviews_services_1 = require("./reviews.services");
const createReviews = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await reviews_services_1.reviewServices.createReviews(req.body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Create review successfully',
        data,
    });
});
const retrieveAllReviews = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await reviews_services_1.reviewServices.retrieveAllReviews(req.query);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Retrieve all reviews successfully!',
        data,
    });
});
const updateReview = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await reviews_services_1.reviewServices.updateReview(id, req.body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Update reviews successfully!',
        data,
    });
});
const deleteReview = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await reviews_services_1.reviewServices.deleteReview(id);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Update reviews successfully!',
        data,
    });
});
exports.reviewController = {
    createReviews,
    retrieveAllReviews,
    updateReview,
    deleteReview,
};
