import { AppError } from '../../errors/AppError';
import { TBike } from './bike.interface';
import { Bike } from './bike.model';
import status from 'http-status';

const createBike = async (payload: TBike) => {
  const data = await Bike.create(payload);
  return data;
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const retrieveAllBikes = async (query: any) => {
  const data = await Bike.find();
  if (!data || data.length < 1) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }
  return data;
};

const updateBikes = async (id: string, payload: Partial<TBike>) => {
  // check is bike exist?
  const isBikeExist = await Bike.findById(id);

  if (!isBikeExist) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }

  const data = await Bike.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return data;
};

const deleteBikes = async (id: string) => {
  const isBikeExist = await Bike.findById(id);

  if (!isBikeExist) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }
  const data = await Bike.findByIdAndDelete(id);
  return data;
};

export const bikeServices = {
  createBike,
  retrieveAllBikes,
  updateBikes,
  deleteBikes,
};
