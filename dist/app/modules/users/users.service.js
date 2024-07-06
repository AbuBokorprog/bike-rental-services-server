"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userServices = void 0;
const AppError_1 = require("../../errors/AppError");
// import { TUser } from './users.interface';
const users_model_1 = require("./users.model");
const http_status_1 = __importDefault(require("http-status"));
const retrieveAllUsers = async (payload) => {
    const result = await users_model_1.userModel
        .find({ email: payload })
        .select({ password: 0 });
    if (!result || result.length < 1) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    return result;
};
const updateProfile = async (email, payload) => {
    const result = await users_model_1.userModel
        .findOneAndUpdate({ email: email }, payload, {
        new: true,
        runValidators: true,
    })
        .select({ password: 0, createdAt: 0, updatedAt: 0 });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, 'No Data Found');
    }
    return result;
};
exports.userServices = {
    retrieveAllUsers,
    updateProfile,
};
