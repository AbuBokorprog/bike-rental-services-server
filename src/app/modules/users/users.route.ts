import express from 'express';
import { userControllers } from './users.controller';
import { UserRole } from './users.constants';
import { auth } from '../../utils/authMiddleware';
const route = express.Router();

route.get('/me', auth(UserRole.admin, UserRole.user));
route.put(
  '/:me',
  auth(UserRole.admin, UserRole.user),
  userControllers.updateSingleUser,
);
export const userRouter = route;
