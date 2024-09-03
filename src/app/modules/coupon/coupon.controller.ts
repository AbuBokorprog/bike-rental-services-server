import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';
import { couponServices } from './coupon.services';

const createCoupon = catchAsync(async (req, res) => {
  const data = await couponServices.createCoupon(req.body);

  successResponse(res, {
    success: false,
    statusCode: httpStatus.OK,
    message: 'Created coupon successfully!',
    data,
  });
});

const retrieveAllCoupon = catchAsync(async (req, res) => {
  const data = await couponServices.retrieveAllCoupon();

  successResponse(res, {
    success: false,
    statusCode: httpStatus.OK,
    message: 'Retrieve all coupon successfully!',
    data,
  });
});

const retrieveSingleCoupon = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await couponServices.retrieveSingleCoupon(id);

  successResponse(res, {
    success: false,
    statusCode: httpStatus.OK,
    message: 'Retrieve single coupon successfully!',
    data,
  });
});

const updateCoupon = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await couponServices.updateCoupon(id, req.body);

  successResponse(res, {
    success: false,
    statusCode: httpStatus.OK,
    message: 'Update coupon successfully!',
    data,
  });
});

const deleteCoupon = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await couponServices.deleteCoupon(id);

  successResponse(res, {
    success: false,
    statusCode: httpStatus.OK,
    message: 'Deleted coupon successfully!',
    data,
  });
});

export const couponController = {
  createCoupon,
  retrieveAllCoupon,
  updateCoupon,
  deleteCoupon,
  retrieveSingleCoupon,
};
