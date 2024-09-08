import { QueryBuilder } from '../../builder/QueryBuilder';
import { AppError } from '../../errors/AppError';
import { bikeSearchableFields } from './bike.constants';
import { TBike } from './bike.interface';
import { Bike } from './bike.model';
import status from 'http-status';

const createBike = async (payload: TBike) => {
  const data = await Bike.create(payload);
  return data;
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const retrieveAllBikes = async (query: any) => {
  const allBikes = new QueryBuilder(Bike.find(), query)
    .search(bikeSearchableFields)
    .filter()
    .sort()
    .paginate()
    .field();

  const data = await allBikes.modelQuery;
  const meta = await allBikes.countTotal();

  if (!data) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }

  return {data, meta};
};

const retrieveSingleBike = async (id: string) => {
  const data = Bike.findById(id);

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
  }).select({ createdAt: 0, updatedAt: 0 });
  return data;
};

const deleteBikes = async (id: string) => {
  const isBikeExist = await Bike.findById(id);

  if (!isBikeExist) {
    throw new AppError(status.NOT_FOUND, 'No Data Found');
  }
  const data = await Bike.findByIdAndDelete(id).select({
    createdAt: 0,
    updatedAt: 0,
  });
  return data;
};

export const bikeServices = {
  createBike,
  retrieveAllBikes,
  retrieveSingleBike,
  updateBikes,
  deleteBikes,
};
