"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewServices = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const QueryBuilder_1 = require("../../builder/QueryBuilder");
const reviews_model_1 = require("./reviews.model");
const createReviews = async (payload) => {
    const result = await reviews_model_1.Reviews.create(payload);
    return result;
};
const retrieveAllReviews = async (query) => {
    const reviews = new QueryBuilder_1.QueryBuilder(reviews_model_1.Reviews.find(), query);
    const result = reviews.modelQuery;
    return result;
};
const updateReview = async (id, payload) => {
    const result = await reviews_model_1.Reviews.findByIdAndUpdate(id, { payload });
    return result;
};
const deleteReview = async (id) => {
    const result = await reviews_model_1.Reviews.findByIdAndDelete(id);
    return result;
};
exports.reviewServices = {
    createReviews,
    retrieveAllReviews,
    updateReview,
    deleteReview,
};
