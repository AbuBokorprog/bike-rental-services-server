"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
exports.default = {
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
