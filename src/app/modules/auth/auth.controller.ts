import { Request, Response } from 'express';
import { authServices } from './auth.services';
import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';

const signUpUser = catchAsync(async (req, res) => {
  const body = req.body;

  const data = await authServices.signUpUser(body);
  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Sign up successfully!',
    data,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;

  const data = await authServices.loginUser(body);
  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User login successfully!',
    data,
  });
});

export const authController = { signUpUser, loginUser };
