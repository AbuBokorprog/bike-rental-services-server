"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const type_services_1 = require("./type.services");
const createTypes = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await type_services_1.typeServices.createTypes(req.body);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Type Created successfully!',
        data,
    });
});
const retrieveAllTypes = (0, catch_async_1.catchAsync)(async (req, res) => {
    const data = await type_services_1.typeServices.retrieveAllTypes();
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Type retrieve all successfully!',
        data,
    });
});
const retrieveSingleTypes = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await type_services_1.typeServices.retrieveSingleTypes(id);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Type retrieve successfully!',
        data,
    });
});
const updateTypes = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await type_services_1.typeServices.updateTypes(id, req.body);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Type updated successfully!',
        data,
    });
});
const deleteTypes = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const data = await type_services_1.typeServices.deleteTypes(id);
    (0, successResponse_1.default)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: 'Type deleted successfully!',
        data,
    });
});
exports.typeController = {
    createTypes,
    retrieveAllTypes,
    updateTypes,
    deleteTypes,
    retrieveSingleTypes
};
