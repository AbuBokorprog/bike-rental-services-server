"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const catch_async_1 = require("./catch.async");
const AppError_1 = require("../errors/AppError");
const http_status_1 = __importDefault(require("http-status"));
const auth = () => {
    return (0, catch_async_1.catchAsync)(async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized!');
        }
        next();
    });
};
exports.auth = auth;
