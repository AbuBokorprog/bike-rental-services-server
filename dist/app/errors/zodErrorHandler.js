"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const zodErrorHandler = (err) => {
    const errorMessages = err.issues?.map((issue) => {
        return {
            path: issue.path[issue.path.length - 1],
            message: issue.message,
        };
    });
    const statusCode = http_status_1.default.BAD_REQUEST;
    return {
        statusCode,
        message: 'Zod validation error',
        errorMessages,
    };
};
exports.zodErrorHandler = zodErrorHandler;
