import { z } from 'zod';

export const createReviewsSchema = z.object({
  bikeId: z.string(),
  userId: z.string(),
  rating: z.number(),
  comment: z.string(),
});

export const updateReviewsSchema = z.object({
  bikeId: z.string().optional(),
  userId: z.string().optional(),
  rating: z.number().optional(),
  comment: z.string().optional(),
});
