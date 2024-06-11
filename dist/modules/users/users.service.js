"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const users_model_1 = require("./users.model");
const signUpUser = async (payload) => {
    const result = await users_model_1.userSignIn.create(payload);
    return result;
};
const loginUser = async (payload) => {
    const result = await users_model_1.userLogin.create(payload);
    return result;
};
const retrieveAllUsers = async () => {
    const result = await users_model_1.userSignIn.find();
    return result;
};
const updateProfile = async (id, payload) => {
    const result = await users_model_1.userSignIn.findByIdAndUpdate(id, { payload }, { new: true, runValidators: true });
    return result;
};
exports.userServices = {
    signUpUser,
    loginUser,
    retrieveAllUsers,
    updateProfile,
};
