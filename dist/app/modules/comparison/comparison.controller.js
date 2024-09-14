"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComparisonController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const comparison_services_1 = require("./comparison.services");
const createComparison = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await comparison_services_1.comparisonServices.createComparison(req.body);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Created Comparison successfully!',
        data,
    });
});
const retrieveAllComparison = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await comparison_services_1.comparisonServices.retrieveAllComparison();
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Retrieve all Comparison successfully!',
        data,
    });
});
const retrieveSingleComparison = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await comparison_services_1.comparisonServices.retrieveSingleComparison(id);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Retrieve single Comparison successfully!',
        data,
    });
});
const updateComparison = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await comparison_services_1.comparisonServices.updateComparison(id, req.body);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Update Comparison successfully!',
        data,
    });
});
const deleteComparison = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await comparison_services_1.comparisonServices.deleteComparison(id);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Deleted Comparison successfully!',
        data,
    });
});
exports.ComparisonController = {
    createComparison,
    retrieveAllComparison,
    updateComparison,
    deleteComparison,
    retrieveSingleComparison,
};
