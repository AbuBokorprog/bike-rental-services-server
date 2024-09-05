import { z } from 'zod';

export const createCouponValidationSchema = z.object({
  code: z.string(),
  discountPercentage: z.number(),
  validFrom: z.string(),
  validUntil: z.string(),
  usageLimit: z.number(),
  usedCount: z.number(),
  isActive: z.boolean(),
});

export const updateCouponValidationSchema = z.object({
  code: z.string().optional(),
  discountPercentage: z.number().optional(),
  validFrom: z.string().optional(),
  validUntil: z.string().optional(),
  usageLimit: z.number().optional(),
  usedCount: z.number().optional(),
  isActive: z.boolean().optional(),
});
