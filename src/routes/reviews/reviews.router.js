const express = require('express');
const {
  httpGetAllReviews,
  httpGetFilteredReview,
  httpGetReview,
} = require('./reviews.controller');

const reviewsRouter = express.Router();

reviewsRouter.get('/', httpGetAllReviews);
reviewsRouter.get('/search', httpGetFilteredReview);
reviewsRouter.get('/:slug', httpGetReview);

module.exports = reviewsRouter;
