import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { Types } from './type.model';
import { TTypes } from './type.interface';

const createTypes = async (payload: TTypes) => {
  const result = await Types.create(payload);

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Types created failed!');
  }

  return result;
};

const retrieveAllTypes = async () => {
  const result = await Types.find();

  return result;
};

const updateTypes = async (id: string, payload: Partial<TTypes>) => {
  const result = await Types.findByIdAndUpdate(id, { payload });

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Type updated failed!');
  }

  return result;
};

const deleteTypes = async (id: string) => {
  const result = await Types.findByIdAndDelete(id);

  return result;
};

export const typeServices = {
  createTypes,
  retrieveAllTypes,
  updateTypes,
  deleteTypes,
};
