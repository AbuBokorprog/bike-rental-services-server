"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewsRoute = void 0;
const express_1 = __importDefault(require("express"));
const reviews_controller_1 = require("./reviews.controller");
const authMiddleware_1 = require("../../utils/authMiddleware");
const users_constants_1 = require("../users/users.constants");
const route = express_1.default.Router();
route.post('/create-review', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), reviews_controller_1.reviewController.createReviews);
route.get('/', reviews_controller_1.reviewController.retrieveAllReviews);
route.put('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), reviews_controller_1.reviewController.updateReview);
route.delete('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), reviews_controller_1.reviewController.deleteReview);
exports.reviewsRoute = route;
