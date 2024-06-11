import express from 'express';
import { userControllers } from './users.controller';
const authRouter = express.Router();
const userRouter = express.Router();

authRouter.post('/signup', userControllers.signUpUser);
authRouter.post('/login', userControllers.loginUser);

userRouter.get('/me');
userRouter.put('/:me', userControllers.updateSingleUser);
export { authRouter, userRouter };
