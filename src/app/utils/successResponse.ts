import { Response } from 'express';

type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

type Data<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  token?: string;
  data: T;
  meta?: TMeta;
};

const successResponse = <T>(res: Response, data: Data<T>) => {
  return res.status(data?.statusCode).json({
    success: data?.success,
    statusCode: data.statusCode,
    message: data?.message,
    token: data.token,
    data: data?.data,
    meta: data?.meta,
  });
};

export default successResponse;
