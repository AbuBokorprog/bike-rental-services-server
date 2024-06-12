import { NextFunction, Request, Response } from 'express';
import successResponse from '../../utils/successRespon';
import { authServices } from './auth.services';

const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;

  try {
    const data = await authServices.signUpUser(userData);
    successResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Sign up successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;

  try {
    const data = await authServices.loginUser(userData);
    successResponse(res, {
      statusCode: 200,
      success: true,
      message: 'User login successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const authController = { signUpUser, loginUser };
