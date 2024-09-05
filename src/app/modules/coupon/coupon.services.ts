import httpStatus from 'http-status';
import { AppError } from '../../errors/AppError';
import { TCoupon } from './coupon.interface';
import { coupon } from './coupon.model';

const createCoupon = async (payload: TCoupon) => {
  const result = await coupon.create(payload);

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Coupon created failed!');
  }

  return result;
};

const retrieveAllCoupon = async () => {
  const result = await coupon.find();

  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Retrieve coupon failed!');
  }

  return result;
};

const retrieveSingleCoupon = async (id: string) => {
  const result = await coupon.findById(id);

  if (!result) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Retrieve single coupon failed!',
    );
  }

  return result;
};

const updateCoupon = async (id: string, payload: Partial<TCoupon>) => {
  const result = await coupon.findByIdAndUpdate(id, { payload });
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Coupon update failed!');
  }
  return result;
};

const deleteCoupon = async (id: string) => {
  const result = await coupon.findByIdAndDelete(id);
  if (!result) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Coupon deleted failed!');
  }
  return result;
};

export const couponServices = {
  createCoupon,
  retrieveAllCoupon,
  updateCoupon,
  deleteCoupon,
  retrieveSingleCoupon,
};
