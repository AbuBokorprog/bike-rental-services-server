import express from 'express';
import { bikeControllers } from './bike.controller';
import { validationRequest } from '../../utils/validate.request';
import {
  createBikeValidationSchema,
  updateBikeValidationSchema,
} from './bike.validation';
const route = express.Router();

route.post(
  '/',
  validationRequest(createBikeValidationSchema),
  bikeControllers.createBike,
);

route.get('/', bikeControllers.retrieveAllBike);

route.put(
  '/:id',
  validationRequest(updateBikeValidationSchema),
  bikeControllers.updateBike,
);

route.delete('/id', bikeControllers.deleteBike);

export const bikeRouter = route;
