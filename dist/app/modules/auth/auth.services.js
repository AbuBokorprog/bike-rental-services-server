"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_model_1 = require("./../users/users.model");
const AppError_1 = require("../../errors/AppError");
const signUpUser = async (payload) => {
    const result = await users_model_1.userModel.create(payload);
    return result;
};
const loginUser = async (payload) => {
    // check the user is exist ?
    const userExist = await users_model_1.userModel.findOne({ email: payload.email });
    if (!userExist) {
        throw new Error('The user is not found');
    }
    const isPasswordMatched = await bcrypt_1.default.compare(payload.password, userExist.password);
    console.log(isPasswordMatched);
    if (!isPasswordMatched) {
        throw new AppError_1.AppError(500, 'Password incorrect!');
    }
    return isPasswordMatched;
};
exports.authServices = { signUpUser, loginUser };
