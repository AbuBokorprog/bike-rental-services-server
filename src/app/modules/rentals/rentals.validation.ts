import { z } from 'zod';

export const createRentalsValidationSchema = z.object({
  body: z.object({
    userId: z.string(),
    bikeId: z.string(),
    startTime: z.string(),
  }),
});
