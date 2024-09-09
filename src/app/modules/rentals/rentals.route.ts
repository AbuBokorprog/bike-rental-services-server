import express from 'express';
import { rentalsController } from './rentals.controller';
import { validationRequest } from '../../utils/validate.request';
import { createRentalsValidationSchema } from './rentals.validation';
import { auth } from '../../utils/authMiddleware';
import { UserRole } from '../users/users.constants';
const route = express.Router();

route.post(
  '/',
  auth(UserRole.admin, UserRole.user, UserRole.superAdmin),
  validationRequest(createRentalsValidationSchema),
  rentalsController.createRental,
);

route.patch("/:id",auth(UserRole.admin, UserRole.superAdmin, UserRole.user), rentalsController.advancePayment)

route.get("/", auth(UserRole.admin, UserRole.superAdmin), rentalsController.retrieveAllRentals)

route.get('/:id',auth(UserRole.admin, UserRole.superAdmin, UserRole.user), rentalsController.retrieveSingleRentals)

route.get(
  '/user/my',
  auth(UserRole.user, UserRole.admin, UserRole.superAdmin),
  rentalsController.getAllRentals,
);

route.put(
  '/:id/return',
  auth(UserRole.admin, UserRole.superAdmin),
  rentalsController.returnBike,
);

route.put("/:id/payment", auth(UserRole.admin, UserRole.superAdmin, UserRole.user), rentalsController.paymentRental)

export const rentalsRoute = route;
