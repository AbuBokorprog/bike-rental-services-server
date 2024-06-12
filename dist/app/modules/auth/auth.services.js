"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServices = void 0;
// import bcrypt from 'bcrypt';
const users_model_1 = require("./../users/users.model");
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
    // const isPasswordMatched = bcrypt.compare(
    //   payload.password,
    //   userExist.password,
    // );
    // return isPasswordMatched;
};
exports.authServices = { signUpUser, loginUser };
