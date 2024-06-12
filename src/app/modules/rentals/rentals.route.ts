import express from 'express';
import { rentalsController } from './rentals.controller';
const route = express.Router();
route.post('/', rentalsController.createRental);
route.get('/', rentalsController.getAllRentals);
route.put('/:id/return', rentalsController.returnBike);
export const rentalsRoute = route;
