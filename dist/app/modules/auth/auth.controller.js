"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const successRespon_1 = __importDefault(require("../../utils/successRespon"));
const auth_services_1 = require("./auth.services");
const signUpUser = async (req, res, next) => {
    const userData = req.body;
    try {
        const data = await auth_services_1.authServices.signUpUser(userData);
        (0, successRespon_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Sign up successfully!',
            data,
        });
    }
    catch (error) {
        next(error);
    }
};
const loginUser = async (req, res, next) => {
    const userData = req.body;
    try {
        const data = await auth_services_1.authServices.loginUser(userData);
        (0, successRespon_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'User login successfully!',
            data,
        });
    }
    catch (error) {
        next(error);
    }
};
exports.authController = { signUpUser, loginUser };
