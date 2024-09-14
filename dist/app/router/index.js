"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const users_route_1 = require("../modules/users/users.route");
const bike_route_1 = require("../modules/bike/bike.route");
const rentals_route_1 = require("../modules/rentals/rentals.route");
const reviews_route_1 = require("../modules/reviews/reviews.route");
const type_route_1 = require("../modules/type/type.route");
const payment_route_1 = require("../modules/payment/payment.route");
const comparison_route_1 = require("../modules/comparison/comparison.route");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/auth',
        route: auth_route_1.authRouter,
    },
    {
        path: '/users',
        route: users_route_1.userRouter,
    },
    {
        path: '/bikes',
        route: bike_route_1.bikeRouter,
    },
    {
        path: '/rentals',
        route: rentals_route_1.rentalsRoute,
    },
    {
        path: '/reviews',
        route: reviews_route_1.reviewsRoute,
    },
    {
        path: '/types',
        route: type_route_1.typesRoute,
    },
    {
        path: '/comparison',
        route: comparison_route_1.comparisonRoute,
    },
    {
        path: '/payment',
        route: payment_route_1.paymentRoute,
    },
];
moduleRoute.forEach((r) => router.use(r.path, r.route));
exports.default = router;
