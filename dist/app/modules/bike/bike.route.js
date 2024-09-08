"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRouter = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const validate_request_1 = require("../../utils/validate.request");
const bike_validation_1 = require("./bike.validation");
const authMiddleware_1 = require("../../utils/authMiddleware");
const users_constants_1 = require("../users/users.constants");
const route = express_1.default.Router();
route.post('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), (0, validate_request_1.validationRequest)(bike_validation_1.createBikeValidationSchema), bike_controller_1.bikeControllers.createBike);
route.get('/:id', bike_controller_1.bikeControllers.retrieveSingleBike);
route.get('/', bike_controller_1.bikeControllers.retrieveAllBike);
route.put('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), (0, validate_request_1.validationRequest)(bike_validation_1.updateBikeValidationSchema), bike_controller_1.bikeControllers.updateBike);
route.delete('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), bike_controller_1.bikeControllers.deleteBike);
exports.bikeRouter = route;
