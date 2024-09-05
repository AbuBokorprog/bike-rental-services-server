/* eslint-disable @typescript-eslint/no-explicit-any */
import { QueryBuilder } from '../../builder/QueryBuilder';
import { TReviews } from './reviews.interface';
import { Reviews } from './reviews.model';

const createReviews = async (payload: TReviews) => {
  const result = await Reviews.create(payload);

  return result;
};

const retrieveAllReviews = async (query: any) => {
  const reviews = new QueryBuilder(Reviews.find(), query);

  const result = reviews.modelQuery;

  return result;
};

const updateReview = async (id: string, payload: Partial<TReviews>) => {
  const result = await Reviews.findByIdAndUpdate(id, { payload });

  return result;
};

const deleteReview = async (id: string) => {
  const result = await Reviews.findByIdAndDelete(id);

  return result;
};

export const reviewServices = {
  createReviews,
  retrieveAllReviews,
  updateReview,
  deleteReview,
};
