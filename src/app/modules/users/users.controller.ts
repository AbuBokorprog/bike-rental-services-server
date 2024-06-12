import { NextFunction, Request, Response } from 'express';
import { userServices } from './users.service';
import successResponse from '../../utils/successRespon';

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
  retrieveAllUsers,
  updateSingleUser,
};
