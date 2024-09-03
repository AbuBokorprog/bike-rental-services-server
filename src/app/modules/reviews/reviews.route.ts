import express from 'express';
import { reviewController } from './reviews.controller';
const route = express.Router();

route.post('/create-review', reviewController.createReviews);
route.get('/', reviewController.retrieveAllReviews);
route.put('/:id', reviewController.updateReview);
route.delete('/:id', reviewController.deleteReview);

export const reviewsRoute = route;
