"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseValidationError = void 0;
const mongooseValidationError = (err) => {
    const errorMessages = Object.values(err?.errors).map((value) => {
        return {
            path: value?.path,
            message: value?.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: 'Mongoose validation error',
        errorMessages,
    };
};
exports.mongooseValidationError = mongooseValidationError;
