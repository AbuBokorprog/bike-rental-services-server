"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const global_error_1 = require("./app/middleware/global.error");
const not_found_error_1 = require("./app/middleware/not.found.error");
const router_1 = __importDefault(require("./app/router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// application routes
app.use('/api', router_1.default);
app.get('/', (req, res) => {
    res.send('This is bike rental services');
});
// global error
app.use(global_error_1.globalError);
// notfound route handler
app.use(not_found_error_1.notfoundError);
exports.default = app;
