import express from 'express';
import { rentalsController } from './rentals.controller';
import { validationRequest } from '../../utils/validate.request';
import { createRentalsValidationSchema } from './rentals.validation';
const route = express.Router();

route.post(
  '/',
  validationRequest(createRentalsValidationSchema),
  rentalsController.createRental,
);

route.get('/', rentalsController.getAllRentals);

route.put('/:id/return', rentalsController.returnBike);

export const rentalsRoute = route;
