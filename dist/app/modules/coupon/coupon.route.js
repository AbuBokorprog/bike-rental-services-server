"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.couponRoute = void 0;
const express_1 = __importDefault(require("express"));
const coupon_controller_1 = require("./coupon.controller");
const authMiddleware_1 = require("../../utils/authMiddleware");
const users_constants_1 = require("../users/users.constants");
const route = express_1.default.Router();
route.post('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), coupon_controller_1.couponController.createCoupon);
route.get('/', coupon_controller_1.couponController.retrieveAllCoupon);
route.get('/:id', coupon_controller_1.couponController.retrieveSingleCoupon);
route.put('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), coupon_controller_1.couponController.updateCoupon);
route.delete('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), coupon_controller_1.couponController.deleteCoupon);
exports.couponRoute = route;
