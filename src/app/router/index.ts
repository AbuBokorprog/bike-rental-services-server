import express from 'express';
import { authRouter } from '../modules/auth/auth.route';
import { userRouter } from '../modules/users/users.route';
import { bikeRouter } from '../modules/bike/bike.route';
import { rentalsRoute } from '../modules/rentals/rentals.route';
import { reviewsRoute } from '../modules/reviews/reviews.route';
import { typesRoute } from '../modules/type/type.route';
import { paymentRoute } from '../modules/payment/payment.route';
import { comparisonRoute } from '../modules/comparison/comparison.route';

const router = express.Router();

const moduleRoute = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/bikes',
    route: bikeRouter,
  },
  {
    path: '/rentals',
    route: rentalsRoute,
  },
  {
    path: '/reviews',
    route: reviewsRoute,
  },
  {
    path: '/types',
    route: typesRoute,
  },
  {
    path: '/comparison',
    route: comparisonRoute,
  },
  {
    path: '/payment',
    route: paymentRoute,
  },
];

moduleRoute.forEach((r) => router.use(r.path, r.route));
export default router;
