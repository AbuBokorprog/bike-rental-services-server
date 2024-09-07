"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesRoute = void 0;
const express_1 = __importDefault(require("express"));
const type_controller_1 = require("./type.controller");
const authMiddleware_1 = require("../../utils/authMiddleware");
const users_constants_1 = require("../users/users.constants");
const route = express_1.default.Router();
route.post('/', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), type_controller_1.typeController.createTypes);
route.get('/', type_controller_1.typeController.retrieveAllTypes);
route.put('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), type_controller_1.typeController.updateTypes);
route.delete('/:id', (0, authMiddleware_1.auth)(users_constants_1.UserRole.admin, users_constants_1.UserRole.superAdmin), type_controller_1.typeController.deleteTypes);
exports.typesRoute = route;
