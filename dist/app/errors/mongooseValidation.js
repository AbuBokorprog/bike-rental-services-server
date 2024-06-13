"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseValidationError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const mongooseValidationError = (err) => {
    const errorMessages = Object.values(err?.errors).map((value) => {
        return {
            path: value?.path,
            message: value?.message,
        };
    });
    const statusCode = http_status_1.default.BAD_REQUEST;
    return {
        statusCode,
        message: 'Mongoose validation error',
        errorMessages,
    };
};
exports.mongooseValidationError = mongooseValidationError;
