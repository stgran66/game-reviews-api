const {
  getAllReviews,
  getReview,
  getFilteredReviews,
} = require('../../models/reviews.model');
const getPagination = require('../../services/query');

async function httpGetAllReviews(req, res) {
  const { skip, limit } = getPagination(req.query);

  return res.status(200).json(await getAllReviews(skip, limit));
}

async function httpGetReview(req, res) {
  const { slug } = req.params;
  return res.status(200).json(await getReview(slug));
}

async function httpGetFilteredReview(req, res) {
  const { query, pageSize } = req.query;
  return res.status(200).json(await getFilteredReviews(query, pageSize));
}

module.exports = { httpGetAllReviews, httpGetFilteredReview, httpGetReview };
