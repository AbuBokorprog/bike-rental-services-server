"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const AppError_1 = require("../../errors/AppError");
const users_model_1 = require("./users.model");
const http_status_1 = require("http-status");
const retrieveAllUsers = async (email) => {
    const result = await users_model_1.userModel.findOne({ email: email });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.status.NOT_FOUND, 'No Data Found');
    }
    return result;
};
const updateProfile = async (email, payload) => {
    const result = await users_model_1.userModel.findByIdAndUpdate(email, payload, {
        new: true,
        runValidators: true,
    });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.status.NOT_FOUND, 'No Data Found');
    }
    return result;
};
exports.userServices = {
    retrieveAllUsers,
    updateProfile,
};
