import { z } from 'zod';

export const createRentalsValidationSchema = z.object({
  userId: z.string(),
  bikeId: z.string(),
  startTime: z.date(),
});

export const updateRentalsValidationSchema = z.object({
  userId: z.string().optional(),
  bikeId: z.string().optional(),
  startTime: z.date().optional(),
  returnTime: z.date().optional(),
  totalCost: z.number().optional(),
  isReturned: z.boolean().optional(),
});
