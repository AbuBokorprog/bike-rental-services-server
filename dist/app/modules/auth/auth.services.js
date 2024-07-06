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
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../../config"));
const signUpUser = async (payload) => {
    const result = await users_model_1.userModel.create(payload);
    return result;
};
const loginUser = async (payload) => {
    // check the user is exist ?
    const userExist = await users_model_1.userModel.findOne({ email: payload.email });
    if (!userExist) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'No Data Found');
    }
    const isPasswordMatched = await bcrypt_1.default.compare(payload.password, userExist.password);
    if (!isPasswordMatched) {
        throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'Password incorrect!');
    }
    const tokenPayload = {
        email: payload.email,
        role: userExist.role,
    };
    const token = jsonwebtoken_1.default.sign(tokenPayload, config_1.default.jwt_secret, {
        expiresIn: config_1.default.expires_in,
    });
    const user = await users_model_1.userModel
        .findById(userExist._id)
        .select({ password: 0, createdAt: 0, updatedAt: 0 });
    return { token, data: user };
};
exports.authServices = { signUpUser, loginUser };
