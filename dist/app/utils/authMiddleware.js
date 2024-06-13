"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const catch_async_1 = require("./catch.async");
const AppError_1 = require("../errors/AppError");
const http_status_1 = __importDefault(require("http-status"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const auth = (...RequireRoles) => {
    return (0, catch_async_1.catchAsync)(async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];
        // if the token send from the token
        if (!token) {
            throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized!');
        }
        // check is the token verify?
        jsonwebtoken_1.default.verify(token, config_1.default.jwt_secret, (err, decoded) => {
            if (err) {
                throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized! Invalid token.');
            }
            const payload = decoded;
            // Checking the payload type
            if (!payload.email || !payload.role) {
                throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized! Invalid token.');
            }
            if (RequireRoles && !RequireRoles.includes(payload.role)) {
                throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized!.');
            }
            // Set the decoded payload to req.user
            req.user = payload;
            next();
        });
    });
};
exports.auth = auth;
