import { z } from 'zod';

export const createComparisonValidationSchema = z.object({
  userId: z.string(),
  bikeId: z.string(),
});
