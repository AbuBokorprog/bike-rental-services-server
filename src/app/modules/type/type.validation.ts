import { z } from 'zod';

export const createTypesValidation = z.object({
  name: z.string(),
  image: z.string(),
});

export const updateTypesValidation = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
});
