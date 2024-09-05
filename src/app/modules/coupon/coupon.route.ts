import express from 'express';
import { couponController } from './coupon.controller';
const route = express.Router();

route.post('/', couponController.createCoupon);
route.get('/', couponController.retrieveAllCoupon);
route.get('/:id', couponController.retrieveSingleCoupon);
route.put('/:id', couponController.updateCoupon);
route.delete('/:id', couponController.deleteCoupon);

export const couponRoute = route;
