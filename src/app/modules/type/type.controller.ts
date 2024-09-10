import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';
import { typeServices } from './type.services';

const createTypes = catchAsync(async (req, res) => {
  const data = await typeServices.createTypes(req.body);

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Type Created successfully!',
    data,
  });
});

const retrieveAllTypes = catchAsync(async (req, res) => {
  const data = await typeServices.retrieveAllTypes();

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Type retrieve all successfully!',
    data,
  });
});

const retrieveSingleTypes = catchAsync(async (req, res) => {
  const {id} = req.params
  const data = await typeServices.retrieveSingleTypes(id)
  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Type retrieve successfully!',
    data,
  });
})

const updateTypes = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await typeServices.updateTypes(id, req.body);

  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Type updated successfully!',
    data,
  });
});

const deleteTypes = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = await typeServices.deleteTypes(id);
  successResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Type deleted successfully!',
    data,
  });
});

export const typeController = {
  createTypes,
  retrieveAllTypes,
  updateTypes,
  deleteTypes,
  retrieveSingleTypes
};
