"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const users_model_1 = require("./users.model");
const retrieveAllUsers = async () => {
    const result = await users_model_1.userModel.find();
    return result;
};
const updateProfile = async (id, payload) => {
    const result = await users_model_1.userModel.findByIdAndUpdate(id, { payload }, { new: true, runValidators: true });
    return result;
};
exports.userServices = {
    retrieveAllUsers,
    updateProfile,
};
