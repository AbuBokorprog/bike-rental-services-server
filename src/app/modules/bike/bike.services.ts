import { TBike } from './bike.interface';
import { Bike } from './bike.model';

const createBike = async (payload: TBike) => {
  const data = await Bike.create(payload);
  return data;
};

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
const retrieveAllBikes = async (query: any) => {
  const data = await Bike.find();
  return data;
};

const updateBikes = async (id: string, payload: Partial<TBike>) => {
  const data = await Bike.findByIdAndUpdate(
    id,
    { payload },
    { new: true, runValidators: true },
  );
  return data;
};
const deleteBikes = async (id: string) => {
  const data = await Bike.findByIdAndDelete(id);
  return data;
};

export const bikeServices = {
  createBike,
  retrieveAllBikes,
  updateBikes,
  deleteBikes,
};
