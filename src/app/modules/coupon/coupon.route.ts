import express from 'express';
import { couponController } from './coupon.controller';
import { auth } from '../../utils/authMiddleware';
import { UserRole } from '../users/users.constants';
const route = express.Router();

route.post(
  '/',
  auth(UserRole.admin, UserRole.superAdmin),
  couponController.createCoupon,
);
route.get('/', couponController.retrieveAllCoupon);
route.get('/:id', couponController.retrieveSingleCoupon);
route.put(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin),
  couponController.updateCoupon,
);
route.delete(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin),
  couponController.deleteCoupon,
);

export const couponRoute = route;
