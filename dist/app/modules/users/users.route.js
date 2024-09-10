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
const validate_request_1 = require("../../utils/validate.request");
const users_validation_1 = require("./users.validation");
const route = express_1.default.Router();
route.get('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), users_controller_1.userControllers.retrieveAllUsers);
route.get('/me', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.user, users_constants_1.UserRole.superAdmin), users_controller_1.userControllers.retrieveMe);
route.put('/me', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.user, users_constants_1.UserRole.superAdmin), (0, validate_request_1.validationRequest)(users_validation_1.updateUserSignInValidationSchema), users_controller_1.userControllers.updateProfile);
route.delete("/:id", (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), users_controller_1.userControllers.deleteUser);
exports.userRouter = route;
