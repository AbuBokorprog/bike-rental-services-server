"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_model_1 = require("./../users/users.model");
const AppError_1 = require("../../errors/AppError");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const http_status_1 = __importDefault(require("http-status"));
const signUpUser = async (payload) => {
    const result = await users_model_1.userModel.create(payload);
    return result;
};
const loginUser = async (payload) => {
    // check the user is exist ?
    const userExist = await users_model_1.userModel.findOne({ email: payload.email });
    if (!userExist) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'The user is not found');
    }
    const isPasswordMatched = await bcrypt_1.default.compare(payload.password, userExist.password);
    if (!isPasswordMatched) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Password incorrect!');
    }
    const tokenPayload = { email: payload.email, role: userExist.role };
    // JWT_SECRET = 7062276ef88f2fcb96f784c05932a9b700f6188954e2f75dfd62eb7f3fce26b4
    const accessToken = jsonwebtoken_1.default.sign(tokenPayload, config_1.default.jwt_secret, {
        expiresIn: config_1.default.expires_in,
    });
    return { accessToken, isPasswordMatched };
};
exports.authServices = { signUpUser, loginUser };
