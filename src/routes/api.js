const express = require('express');
const reviewsRouter = require('./reviews/reviews.router');

const api = express.Router();

api.use('/reviews', reviewsRouter);

module.exports = api;
