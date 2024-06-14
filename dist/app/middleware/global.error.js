"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalError = void 0;
const zod_1 = require("zod");
const zodErrorHandler_1 = require("../errors/zodErrorHandler");
const config_1 = __importDefault(require("../config"));
const mongooseValidation_1 = require("../errors/mongooseValidation");
const duplicateErrorHandler_1 = require("../errors/duplicateErrorHandler");
const AppError_1 = require("../errors/AppError");
const castError_1 = require("../errors/castError");
const globalError = (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
err, req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    let statusCode = 500;
    let message = err.message || 'Something went wrong!';
    let errorMessages = [
        {
            path: '',
            message: message,
        },
    ];
    if (err instanceof zod_1.ZodError) {
        const simplifiedError = (0, zodErrorHandler_1.zodErrorHandler)(err);
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message;
        errorMessages = simplifiedError.errorMessages;
    }
    else if (err.name === 'ValidationError') {
        const simplified = (0, mongooseValidation_1.mongooseValidationError)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorMessages = simplified.errorMessages;
    }
    else if (err.name === 'CastError') {
        const simplified = (0, castError_1.castErrorHandler)(err);
        statusCode = simplified.statusCode;
        message = simplified.message;
        errorMessages = simplified.errorMessages;
    }
    else if (err.code === 11000) {
        // mongoose duplicate error handler
        const simplifyMongooseError = (0, duplicateErrorHandler_1.duplicateErrorHandler)(err);
        statusCode = simplifyMongooseError?.statusCode;
        message = simplifyMongooseError?.message;
        errorMessages = simplifyMongooseError?.errorMessages;
    }
    else if (err instanceof AppError_1.AppError) {
        statusCode = err.statusCode;
        message = err?.message;
        errorMessages = [
            {
                path: '',
                message: err?.message,
            },
        ];
    }
    else if (err instanceof Error) {
        message = err?.message;
        errorMessages = [
            {
                path: '',
                message: err?.message,
            },
        ];
    }
    return res.status(statusCode).json({
        success: false,
        message: message,
        errorMessages,
        stack: config_1.default.node_ENV === 'development' ? err?.stack : null,
    });
};
exports.globalError = globalError;
