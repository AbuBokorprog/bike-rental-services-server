"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
const users_model_1 = require("./../users/users.model");
const signUpUser = async (payload) => {
    const result = await users_model_1.userModel.create(payload);
    return result;
};
const loginUser = async (payload) => {
    const result = await users_model_1.userModel.create(payload);
    return result;
};
exports.authServices = { signUpUser, loginUser };
