import { ZodError, ZodIssue } from 'zod';
import { TErrorMessages, TGenericResponse } from './error';

export const zodErrorHandler = (err: ZodError): TGenericResponse => {
  const errorMessages: TErrorMessages = err.issues?.map((issue: ZodIssue) => {
    return {
      path: issue.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Zod validation error',
    errorMessages,
  };
};
