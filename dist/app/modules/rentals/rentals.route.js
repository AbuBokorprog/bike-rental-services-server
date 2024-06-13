"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsRoute = void 0;
const express_1 = __importDefault(require("express"));
const rentals_controller_1 = require("./rentals.controller");
const validate_request_1 = require("../../utils/validate.request");
const rentals_validation_1 = require("./rentals.validation");
const authMiddleware_1 = require("../../utils/authMiddleware");
const users_constants_1 = require("../users/users.constants");
const route = express_1.default.Router();
route.post('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.user), (0, validate_request_1.validationRequest)(rentals_validation_1.createRentalsValidationSchema), rentals_controller_1.rentalsController.createRental);
route.get('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.user, users_constants_1.UserRole.admin), rentals_controller_1.rentalsController.getAllRentals);
route.put('/:id/return', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin), rentals_controller_1.rentalsController.returnBike);
exports.rentalsRoute = route;
