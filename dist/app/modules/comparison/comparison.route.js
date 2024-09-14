"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparisonRoute = void 0;
const express_1 = __importDefault(require("express"));
const authMiddleware_1 = require("../../utils/authMiddleware");
const users_constants_1 = require("../users/users.constants");
const comparison_controller_1 = require("./comparison.controller");
const route = express_1.default.Router();
route.post('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), comparison_controller_1.ComparisonController.createComparison);
route.get('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), comparison_controller_1.ComparisonController.retrieveAllComparison);
route.get('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), comparison_controller_1.ComparisonController.retrieveSingleComparison);
route.put('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), comparison_controller_1.ComparisonController.updateComparison);
route.delete('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin, users_constants_1.UserRole.user), comparison_controller_1.ComparisonController.deleteComparison);
exports.comparisonRoute = route;
