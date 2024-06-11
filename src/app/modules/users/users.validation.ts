import { z } from 'zod';

export const createUserSignInValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    phone: z.number(),
    address: z.string(),
    role: z.enum(['admin', 'user']),
  }),
});

export const updateUserSignInValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
    phone: z.number().optional(),
    address: z.string().optional(),
    role: z.enum(['admin', 'user']).optional(),
  }),
});
