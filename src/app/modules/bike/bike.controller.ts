import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';
import { bikeServices } from './bike.services';

const createBike = catchAsync(async (req, res) => {
  const { body } = req.body;

  const data = await bikeServices.createBike(body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bike added successfully!',
    data,
  });
});

const retrieveAllBike = catchAsync(async (req, res) => {
  const data = await bikeServices.retrieveAllBikes(req.query);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bikes retrieved successfully!',
    data,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  const data = await bikeServices.updateBikes(id, body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bike updated successfully!',
    data,
  });
});

const deleteBike = catchAsync(async (req, res) => {
  const { id } = req.params;

  const data = await bikeServices.deleteBikes(id);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Bike deleted successfully!',
    data,
  });
});

export const bikeControllers = {
  createBike,
  retrieveAllBike,
  updateBike,
  deleteBike,
};
