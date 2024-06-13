"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateErrorHandler = void 0;
const http_status_1 = __importDefault(require("http-status"));
const duplicateErrorHandler = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorMessages = [
        {
            path: '',
            message: `${extractedMessage} is already exist.`,
        },
    ];
    const statusCode = http_status_1.default.BAD_REQUEST;
    return {
        statusCode,
        message: 'Invalid Id Error',
        errorMessages,
    };
};
exports.duplicateErrorHandler = duplicateErrorHandler;
