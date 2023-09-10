const reviews = require('./reviews.mongo');

async function getAllReviews(skip, limit) {
  const paginatedReviews = await reviews
    .find()
    .sort('-createdAt')
    .skip(skip)
    .limit(limit)
    .select('title slug subtitle image -_id');

  const totalCount = await reviews.count();
  const pageCount = Math.ceil(totalCount / limit);

  return { paginatedReviews, pageCount };
}

async function getReview(slug) {
  const response = reviews.findOne({ slug });
  return response;
}

async function getFilteredReviews(query = '', limit) {
  const filteredReviews = await reviews
    .find({
      title: { $regex: query, $options: 'i' },
    })
    .sort('-createdAt')
    .limit(limit)
    .select('slug title -_id');

  return filteredReviews;
}

module.exports = { getAllReviews, getReview, getFilteredReviews };
