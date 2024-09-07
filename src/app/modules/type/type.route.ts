import express from 'express';
import { typeController } from './type.controller';
import { auth } from '../../utils/authMiddleware';
import { UserRole } from '../users/users.constants';
const route = express.Router();

route.post(
  '/',
  auth(UserRole.admin, UserRole.superAdmin),
  typeController.createTypes,
);
route.get('/', typeController.retrieveAllTypes);
route.put(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin),
  typeController.updateTypes,
);
route.delete(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin),
  typeController.deleteTypes,
);

export const typesRoute = route;
