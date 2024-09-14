import express from 'express';
import { auth } from '../../utils/authMiddleware';
import { UserRole } from '../users/users.constants';
import { ComparisonController } from './comparison.controller';
const route = express.Router();

route.post(
  '/',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  ComparisonController.createComparison,
);
route.get(
  '/',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  ComparisonController.retrieveAllComparison,
);
route.get(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  ComparisonController.retrieveSingleComparison,
);
route.put(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  ComparisonController.updateComparison,
);
route.delete(
  '/:id',
  auth(UserRole.admin, UserRole.superAdmin, UserRole.user),
  ComparisonController.deleteComparison,
);

export const comparisonRoute = route;
