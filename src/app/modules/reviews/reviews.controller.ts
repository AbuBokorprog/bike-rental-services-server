import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';
import { reviewServices } from './reviews.services';

const createReviews = catchAsync(async (req, res) => {
  const data = await reviewServices.createReviews(req.body);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Create review successfully',
    data,
  });
});

const retrieveAllReviews = catchAsync(async (req, res) => {
  const data = await reviewServices.retrieveAllReviews(req.query);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Retrieve all reviews successfully!',
    data,
  });
});

const updateReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await reviewServices.updateReview(id, req.body);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update reviews successfully!',
    data,
  });
});

const deleteReview = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await reviewServices.deleteReview(id);

  successResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Update reviews successfully!',
    data,
  });
});

export const reviewController = {
  createReviews,
  retrieveAllReviews,
  updateReview,
  deleteReview,
};
