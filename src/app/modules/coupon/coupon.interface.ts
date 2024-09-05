export interface TCoupon {
  code: string;
  discountPercentage: number;
  validFrom: Date;
  validUntil: Date;
  usageLimit: number;
  usedCount: number;
  isActive: boolean;
}
