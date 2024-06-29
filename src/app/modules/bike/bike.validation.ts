import { z } from 'zod';

export const createBikeValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.number(),
  isAvailable: z.boolean().default(true),
  cc: z.number(),
  year: z.number(),
  model: z.string(),
  brand: z.string(),
});

export const updateBikeValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  pricePerHour: z.number(),
  isAvailable: z.boolean().default(true),
  cc: z.number(),
  year: z.number(),
  model: z.string(),
  brand: z.string(),
});
