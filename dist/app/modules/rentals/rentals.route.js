"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalsRoute = void 0;
const express_1 = __importDefault(require("express"));
const rentals_controller_1 = require("./rentals.controller");
const route = express_1.default.Router();
route.post('/', rentals_controller_1.rentalsController.createRental);
route.get('/', rentals_controller_1.rentalsController.getAllRentals);
route.put('/:id/return', rentals_controller_1.rentalsController.returnBike);
exports.rentalsRoute = route;
