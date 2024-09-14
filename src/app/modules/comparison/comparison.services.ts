import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { TComparison } from './comparison.interface';
import { comparison } from './comparison.model';

const createComparison = async (payload: TComparison) => {
  const result = await comparison.create(payload);

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Coupon created failed!');
  }

  return result;
};

const retrieveAllComparison = async () => {
  const result = await comparison
    .find()
    .populate('userId')
    .populate('bikeId')
    .select({ __v: 0, description: 0, createdAt: 0, updatedAt: 0 });

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Retrieve coupon failed!');
  }

  return result;
};

const retrieveSingleComparison = async (id: string) => {
  const result = await comparison.findById(id);

  if (!result) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Retrieve single coupon failed!',
    );
  }

  return result;
};

const updateComparison = async (id: string, payload: Partial<TComparison>) => {
  const result = await comparison.findByIdAndUpdate(id, { payload });
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Coupon update failed!');
  }
  return result;
};

const deleteComparison = async (id: string) => {
  const result = await comparison.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Coupon deleted failed!');
  }
  return result;
};

export const comparisonServices = {
  createComparison,
  retrieveAllComparison,
  updateComparison,
  deleteComparison,
  retrieveSingleComparison,
};
