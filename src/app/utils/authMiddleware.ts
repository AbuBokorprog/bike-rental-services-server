/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { catchAsync } from './catch.async';
import { AppError } from '../errors/AppError';
import status from 'http-status';
import jwt, { jwtPayload } from 'jsonwebtoken';
import config from '../config';
import { TJWTPayload } from '../modules/auth/auth.constants';

export const auth = (...RequireRoles: (string | undefined)[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;
    // if the token send from the token
    if (!token) {
      throw new AppError(status.UNAUTHORIZED, 'You are unauthorized!');
    }

    // check is the token verify?
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    jwt.verify(
      token,
      config.jwt_secret,
      function (err: any, decoded: TJWTPayload) {
        // err
        if (err) {
          throw new AppError(status.BAD_REQUEST, 'You are unauthorized!');
        }
        const role = decoded?.role;

        if (RequireRoles && !RequireRoles.includes(role)) {
          throw new AppError(status.BAD_REQUEST, 'You are unauthorized!');
        }
        // decoded undefined

        req.user = decoded as jwtPayload;
      },
    );

    next();
  });
};
