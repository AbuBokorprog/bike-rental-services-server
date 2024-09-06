"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesRoute = void 0;
const express_1 = __importDefault(require("express"));
const type_controller_1 = require("./type.controller");
const route = express_1.default.Router();
route.post('/', type_controller_1.typeController.createTypes);
route.get('/', type_controller_1.typeController.retrieveAllTypes);
route.put('/:id', type_controller_1.typeController.updateTypes);
route.delete('/:id', type_controller_1.typeController.deleteTypes);
exports.typesRoute = route;
