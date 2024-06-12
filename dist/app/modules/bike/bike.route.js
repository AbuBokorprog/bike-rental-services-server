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
const route = express_1.default.Router();
route.post('/', (0, validate_request_1.validationRequest)(bike_validation_1.createBikeValidationSchema), bike_controller_1.bikeControllers.createBike);
route.get('/', bike_controller_1.bikeControllers.retrieveAllBike);
route.put('/:id', (0, validate_request_1.validationRequest)(bike_validation_1.updateBikeValidationSchema), bike_controller_1.bikeControllers.updateBike);
route.delete('/id', bike_controller_1.bikeControllers.deleteBike);
exports.bikeRouter = route;
