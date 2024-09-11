import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: `${process.env.MONGODB_URL}`,
  salt: process.env.SALT,
  node_ENV: `${process.env.NODE_ENV}`,
  jwt_secret: `${process.env.JWT_SECRET}`,
  expires_in: process.env.EXPIRES_IN,
  paymentInitial: process.env.BASE_URL,
  storeId: process.env.STORE_ID,
  signatureKey: process.env.SIGNATURE_KEY,
  validationUrl: process.env.VALIDATION_URL,
};
