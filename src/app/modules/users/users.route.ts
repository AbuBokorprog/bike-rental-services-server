import express from 'express';
import { userControllers } from './users.controller';
import { UserRole } from './users.constants';
import { auth } from '../../utils/authMiddleware';
import { validationRequest } from '../../utils/validate.request';
import { updateUserSignInValidationSchema } from './users.validation';
const route = express.Router();

route.get(
  '/',
  auth(UserRole.admin, UserRole.superAdmin),
  userControllers.retrieveAllUsers,
);

route.get(
  '/me',
  auth(UserRole.admin, UserRole.user, UserRole.superAdmin),
  userControllers.retrieveMe,
);

route.put(
  '/me',
  auth(UserRole.admin, UserRole.user, UserRole.superAdmin),
  validationRequest(updateUserSignInValidationSchema),
  userControllers.updateProfile,
);
export const userRouter = route;
