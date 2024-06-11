"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const authRouter = express_1.default.Router();
exports.authRouter = authRouter;
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
authRouter.post('/signup', users_controller_1.userControllers.signUpUser);
authRouter.post('/login', users_controller_1.userControllers.loginUser);
userRouter.get('/me');
userRouter.put('/:me', users_controller_1.userControllers.updateSingleUser);
