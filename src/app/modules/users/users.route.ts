import express from 'express';
import { userControllers } from './users.controller';
import { UserRole } from './users.constants';
import { auth } from '../../utils/authMiddleware';
import { validationRequest } from '../../utils/validate.request';
import { updateUserSignInValidationSchema } from './users.validation';
const route = express.Router();

route.get(
  '/me',
  auth(UserRole.admin, UserRole.user, UserRole.superAdmin),
  userControllers.retrieveUser,
);

route.put(
  '/me',
  auth(UserRole.admin, UserRole.user, UserRole.superAdmin),
  validationRequest(updateUserSignInValidationSchema),
  userControllers.updateSingleUser,
);
export const userRouter = route;
