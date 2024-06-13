"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const catch_async_1 = require("./catch.async");
const AppError_1 = require("../errors/AppError");
const http_status_1 = __importDefault(require("http-status"));
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
// import { TJwtPayload } from '../modules/auth/auth.constants';
// import { TJWTPayload } from '../modules/auth/auth.constants';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const auth = (...RequireRoles) => {
    return (0, catch_async_1.catchAsync)(async (req, res, next) => {
        const token = req.headers.authorization;
        // if the token send from the token
        if (!token) {
            throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, 'You are unauthorized!');
        }
        // check is the token verify?
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        jsonwebtoken_1.default.verify(token, config_1.default.jwt_secret, (err, decoded) => {
            if (err) {
                return next(new AppError_1.AppError(401, 'You are unauthorized! Invalid token.'));
            }
            const payload = decoded;
            // Checking the payload type
            if (!payload.data.email || !payload.data.role) {
                return next(new AppError_1.AppError(401, 'Token is missing required fields.'));
            }
            // Set the decoded payload to req.user
            req.user = payload.data;
            next();
        });
    });
};
exports.auth = auth;
