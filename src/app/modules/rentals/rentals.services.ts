import { Bike } from '../bike/bike.model';
import { TRentals } from './rentals.interface';
import { rentals } from './rentals.model';

const createRentals = async (payload: TRentals) => {
  const data = await rentals.create(payload);
  const updateBike = await Bike.findByIdAndUpdate(
    payload.bikeId,
    { isAvailable: false },
    { new: true, runValidators: true },
  );
  return data;
};

const returnBike = async (id: string) => {
  // find current rentals
  const currentRentals = await rentals.findById(id);
  const bikeId = currentRentals?.bikeId;

  //   find bike by id
  const rentalsBike = await Bike.findById(bikeId);

  const pricePerHour = rentalsBike?.pricePerHour;
  const startTime = new Date(currentRentals?.startTime as Date);

  //  current time
  const returnTime = new Date();
  // hours of rent
  const differenceTime = returnTime.getTime() - startTime.getTime();
  const differenceInHours = (differenceTime / (1000 * 60 * 60)).toFixed(2);

  //   total cost
  const totalCost = (Number(differenceInHours) * Number(pricePerHour)).toFixed(
    2,
  );

  const updateRental = await rentals.findByIdAndUpdate(
    id,
    { returnTime, totalCost, isReturned: true },
    { new: true, runValidators: true },
  );

  const isAvailableUpdate = await Bike.findByIdAndUpdate(
    currentRentals?.bikeId,
    { isAvailable: true },
    { new: true, runValidators: true },
  );
  console.log(isAvailableUpdate, updateRental);
  return updateRental;
};

const getAllRentals = async () => {
  const data = await rentals.find();
  return data;
};
export const rentalsServices = { createRentals, returnBike, getAllRentals };
