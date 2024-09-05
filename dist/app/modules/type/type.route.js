"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typesRoute = void 0;
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
route.post('/');
route.get('/');
route.get('/:id');
route.put('/:id');
route.delete('/:id');
exports.typesRoute = route;
