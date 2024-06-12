import express from 'express';
import { authRouter } from '../modules/auth/auth.route';
import { userRouter } from '../modules/users/users.route';
import { bikeRouter } from '../modules/bike/bike.route';

const router = express.Router();

const moduleRoute = [
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/bikes',
    route: bikeRouter,
  },
];

moduleRoute.forEach((r) => router.use(r.path, r.route));
export default router;
