import { NextFunction, Request, Response } from 'express';
import { catchAsync } from './catch.async';
import { AppError } from '../errors/AppError';
import status from 'http-status';

export const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are unauthorized!');
    }
    next();
  });
};
