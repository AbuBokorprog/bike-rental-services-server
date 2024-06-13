"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userControllers = void 0;
const users_service_1 = require("./users.service");
const successResponse_1 = __importDefault(require("../../utils/successResponse"));
const retrieveUser = async (req, res, next) => {
    const user = req.user;
    const data = await users_service_1.userServices.retrieveAllUsers(user?.email);
    try {
        (0, successResponse_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Retrieve All users successfully!',
            data,
        });
    }
    catch (error) {
        next(error);
    }
};
const updateSingleUser = async (req, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
res, 
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
next) => {
    // const userEmail = req.user;
    const newData = req.body;
    console.log(newData);
    // try {
    //   const data = await userServices.updateProfile(newData);
    //   successResponse(res, {
    //     statusCode: 200,
    //     success: true,
    //     message: 'Retrieve All users successfully!',
    //     data,
    //   });
    // } catch (error) {
    //   next(error);
    // }
};
exports.userControllers = {
    retrieveUser,
    updateSingleUser,
};
