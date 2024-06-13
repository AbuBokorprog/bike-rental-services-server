"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notfoundError = void 0;
const http_status_1 = __importDefault(require("http-status"));
const notfoundError = (req, res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    return res.status(404).json({
        success: false,
        statusCode: http_status_1.default.NOT_FOUND,
        message: 'Not Found!',
    });
};
exports.notfoundError = notfoundError;
