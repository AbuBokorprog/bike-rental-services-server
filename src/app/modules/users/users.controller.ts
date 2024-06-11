import { NextFunction, Request, Response } from 'express';
import { userServices } from './users.service';
import successResponse from '../../utils/successRespon';

const signUpUser = async (req: Request, res: Response, next: NextFunction) => {
  const userData = req.body;

  try {
    const data = await userServices.signUpUser(userData);
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
    const data = await userServices.loginUser(userData);
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

const retrieveAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const data = await userServices.retrieveAllUsers();

  try {
    successResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieve All users successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
};

const updateSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const id = req.query;
  const newData = req.body;

  try {
    const data = await userServices.updateProfile(id, newData);
    successResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Retrieve All users successfully!',
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const userControllers = {
  signUpUser,
  loginUser,
  retrieveAllUsers,
  updateSingleUser,
};
