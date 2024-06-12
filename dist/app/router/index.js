"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = require("../modules/auth/auth.route");
const users_route_1 = require("../modules/users/users.route");
const bike_route_1 = require("../modules/bike/bike.route");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/auth',
        route: auth_route_1.authRouter,
    },
    {
        path: '/user',
        route: users_route_1.userRouter,
    },
    {
        path: '/bikes',
        route: bike_route_1.bikeRouter,
    },
];
moduleRoute.forEach((r) => router.use(r.path, r.route));
exports.default = router;
