"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const users_constants_1 = require("./users.constants");
const authMiddleware_1 = require("../../utils/authMiddleware");
const route = express_1.default.Router();
route.get('/me', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.user), users_controller_1.userControllers.retrieveUser);
route.put('/me', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.user), users_controller_1.userControllers.updateSingleUser);
exports.userRouter = route;
