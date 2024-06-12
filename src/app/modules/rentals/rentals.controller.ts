import { catchAsync } from '../../utils/catch.async';
import successResponse from '../../utils/successResponse';
import { rentalsServices } from './rentals.services';

const createRental = catchAsync(async (req, res) => {
  const { body } = req.body;

  const data = await rentalsServices.createRentals(body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'create rentals successfully!',
    data,
  });
});

const getAllRentals = catchAsync(async (req, res) => {
  const data = await rentalsServices.getAllRentals();

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'create rentals successfully!',
    data,
  });
});

const returnBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { body } = req.body;
  const data = await rentalsServices.returnBike(id, body);

  successResponse(res, {
    statusCode: 200,
    success: true,
    message: 'create rentals successfully!',
    data,
  });
});

export const rentalsController = { createRental, getAllRentals, returnBike };
