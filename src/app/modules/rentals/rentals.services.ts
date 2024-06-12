import { startSession } from 'mongoose';
import status from 'http-status';
import { Bike } from '../bike/bike.model';
import { TRentals } from './rentals.interface';
import { rentals } from './rentals.model';
import { AppError } from '../../errors/AppError';

const createRentals = async (payload: TRentals) => {
  const session = await startSession();

  try {
    session.startTransaction();
    const data = await rentals.create([payload], { session });
    if (!data) {
      throw new AppError(status.BAD_REQUEST, 'Rental created failed!');
    }

    const updateBike = await Bike.findByIdAndUpdate(
      payload.bikeId,
      { isAvailable: false },
      { new: true, runValidators: true, session },
    );
    if (!updateBike) {
      throw new AppError(status.BAD_REQUEST, 'Bike not found!');
    }
    await session.commitTransaction();
    session.endSession();
    return data;
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw new AppError(status.BAD_REQUEST, 'Rental create failed!');
  }
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

  return updateRental;
};

const getAllRentals = async () => {
  const data = await rentals.find();
  return data;
};
export const rentalsServices = { createRentals, returnBike, getAllRentals };
