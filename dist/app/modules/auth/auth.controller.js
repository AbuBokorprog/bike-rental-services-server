"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_services_1 = require("./auth.services");
const catch_async_1 = require("../../utils/catch.async");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const signUpUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const body = req.body;
    const data = await auth_services_1.authServices.signUpUser(body);
    (0, successResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Sign up successfully!',
        data,
    });
});
const loginUser = (0, catch_async_1.catchAsync)(async (req, res) => {
    const body = req.body;
    const data = await auth_services_1.authServices.loginUser(body);
    (0, successResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'User login successfully!',
        data,
    });
});
exports.authController = { signUpUser, loginUser };
