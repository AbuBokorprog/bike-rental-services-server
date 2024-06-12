import { TRentals } from './rentals.interface';
import { rentals } from './rentals.model';

const createRentals = async (payload: Partial<TRentals>) => {
  const data = await rentals.create(payload);
  return data;
};

const returnBike = async (id: string, payload: Partial<TRentals>) => {
  console.log(payload);
};
const getAllRentals = async () => {
  const data = await rentals.find();
  return data;
};
export const rentalsServices = { createRentals, returnBike, getAllRentals };
