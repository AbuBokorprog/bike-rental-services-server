"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentController = void 0;
const payment_service_1 = require("./payment.service");
const catch_async_1 = require("../../utils/catch.async");
const confirmationController = (0, catch_async_1.catchAsync)(async (req, res) => {
    const { transactionId } = req.query;
    const result = await payment_service_1.paymentServices.confirmationService(transactionId);
    res.send(result);
});
const PaymentFailed = (0, catch_async_1.catchAsync)(async (req, res) => {
    const result = await payment_service_1.paymentServices.failedPayment();
    res.send(result);
});
exports.paymentController = {
    confirmationController,
    PaymentFailed,
};
