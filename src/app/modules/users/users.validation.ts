import { z } from 'zod';

export const createUserSignInValidationSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  phone: z.string(),
  address: z.string(),
  image: z.string(),
});

export const updateUserSignInValidationSchema = z.object({
  name: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
  image: z.string().optional(),
  role: z.enum(['admin', 'user', 'super-admin']).optional(),
});
