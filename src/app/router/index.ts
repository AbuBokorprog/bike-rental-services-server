import express from 'express';
import { authRouter, userRouter } from '../modules/users/users.route';

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
];

moduleRoute.forEach((r) => router.use(r.path, r.route));
export default router;
