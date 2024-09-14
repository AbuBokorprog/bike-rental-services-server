import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';
import { comparisonServices } from './comparison.services';

const createComparison = catchAsync(async (req, res) => {
  const data = await comparisonServices.createComparison(req.body);

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Created Comparison successfully!',
    data,
  });
});

const retrieveAllComparison = catchAsync(async (req, res) => {
  const data = await comparisonServices.retrieveAllComparison();

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve all Comparison successfully!',
    data,
  });
});

const retrieveSingleComparison = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await comparisonServices.retrieveSingleComparison(id);

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Retrieve single Comparison successfully!',
    data,
  });
});

const updateComparison = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await comparisonServices.updateComparison(id, req.body);

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Update Comparison successfully!',
    data,
  });
});

const deleteComparison = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await comparisonServices.deleteComparison(id);

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Deleted Comparison successfully!',
    data,
  });
});

export const ComparisonController = {
  createComparison,
  retrieveAllComparison,
  updateComparison,
  deleteComparison,
  retrieveSingleComparison,
};
