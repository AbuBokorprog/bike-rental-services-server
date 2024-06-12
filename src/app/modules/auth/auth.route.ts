import express from 'express';
import { authController } from './auth.controller';
const route = express.Router();

route.post('/signup', authController.signUpUser);
route.post('/login', authController.loginUser);

export const authRouter = route;
