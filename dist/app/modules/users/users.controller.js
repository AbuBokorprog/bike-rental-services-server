"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const users_service_1 = require("./users.service");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const catch_async_1 = require("../../utils/catch.async");
const http_status_1 = __importDefault(require("http-status"));
const retrieveUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const data = await users_service_1.userServices.retrieveAllUsers(user?.email);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User profile retrieved successfully!',
        data,
    });
});
const updateSingleUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const body = req.body;
    const data = await users_service_1.userServices.updateProfile(user?.email, body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Profile updated successfully!',
        data,
    });
});
exports.userControllers = {
    retrieveUser,
    updateSingleUser,
};
