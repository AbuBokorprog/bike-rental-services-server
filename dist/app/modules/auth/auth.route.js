"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validate_request_1 = require("../../utils/validate.request");
const users_validation_1 = require("../users/users.validation");
const auth_validation_1 = require("./auth.validation");
const route = express_1.default.Router();
route.post('/signup', (0, validate_request_1.validationRequest)(users_validation_1.createUserSignInValidationSchema), auth_controller_1.authController.signUpUser);
route.post('/login', (0, validate_request_1.validationRequest)(auth_validation_1.userLoginValidationSchema), auth_controller_1.authController.loginUser);
exports.authRouter = route;
