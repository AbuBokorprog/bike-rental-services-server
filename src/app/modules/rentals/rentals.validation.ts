import { z } from 'zod';

export const createRentalsValidationSchema = z.object({
  body: z.object({
    bikeId: z.string(),
    startTime: z.string().optional(),
  }),
});
