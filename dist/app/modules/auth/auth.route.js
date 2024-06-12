"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const route = express_1.default.Router();
route.post('/signup', auth_controller_1.authController.signUpUser);
route.post('/login', auth_controller_1.authController.loginUser);
exports.authRouter = route;
