"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../errors/AppError");
const type_model_1 = require("./type.model");
const createTypes = async (payload) => {
    const result = await type_model_1.Types.create(payload);
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Types created failed!');
    }
    return result;
};
const retrieveAllTypes = async () => {
    const result = await type_model_1.Types.find();
    return result;
};
const retrieveSingleTypes = async (id) => {
    const result = await type_model_1.Types.findById(id);
    return result;
};
const updateTypes = async (id, payload) => {
    const result = await type_model_1.Types.findByIdAndUpdate(id, { payload });
    if (!result) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, 'Type updated failed!');
    }
    return result;
};
const deleteTypes = async (id) => {
    const result = await type_model_1.Types.findByIdAndDelete(id);
    return result;
};
exports.typeServices = {
    createTypes,
    retrieveAllTypes,
    updateTypes,
    deleteTypes,
    retrieveSingleTypes
};
