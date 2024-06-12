"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const route = express_1.default.Router();
route.get('/me');
route.put('/:me', users_controller_1.userControllers.updateSingleUser);
exports.userRouter = route;
