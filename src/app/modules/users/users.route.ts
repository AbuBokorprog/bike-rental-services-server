import express from 'express';
import { userControllers } from './users.controller';
const route = express.Router();

route.get('/me');
route.put('/:me', userControllers.updateSingleUser);
export const userRouter = route;
