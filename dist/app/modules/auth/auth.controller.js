"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_services_1 = require("./auth.services");
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const http_status_1 = __importDefault(require("http-status"));
const signUpUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const body = req.body;
    const data = await auth_services_1.authServices.signUpUser(body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'User registered successfully',
        data,
    });
});
const loginUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const body = req.body;
    const { token, data } = await auth_services_1.authServices.loginUser(body);
    (0, successResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'User logged in successfully',
        token: token,
        data,
    });
});
exports.authController = { signUpUser, loginUser };
