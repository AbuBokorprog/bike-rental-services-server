import express from 'express';
import { reviewController } from './reviews.controller';
import { auth } from '../../utils/authMiddleware';
import { UserRole } from '../users/users.constants';
const route = express.Router();

route.post(
  '/create-review',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  reviewController.createReviews,
);
route.get('/', reviewController.retrieveAllReviews);
route.put(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  reviewController.updateReview,
);
route.delete(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  reviewController.deleteReview,
);

export const reviewsRoute = route;
