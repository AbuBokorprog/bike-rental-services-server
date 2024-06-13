/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { catchAsync } from './catch.async';
import { AppError } from '../errors/AppError';
import status from 'http-status';
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from '../config';
// import { TJwtPayload } from '../modules/auth/auth.constants';
// import { TJWTPayload } from '../modules/auth/auth.constants';

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
export const auth = (...RequireRoles: (string | undefined)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // if the token send from the token
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are unauthorized!');
    }

    // check is the token verify?
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt.verify(token, config.jwt_secret, (err, decoded) => {
      if (err) {
        return next(new AppError(401, 'You are unauthorized! Invalid token.'));
      }

      const payload = decoded as JwtPayload;

      // Checking the payload type
      if (!payload.data.email || !payload.data.role) {
        return next(new AppError(401, 'Token is missing required fields.'));
      }

      // Set the decoded payload to req.user
      req.user = payload.data;

      next();
    });
  });
};
