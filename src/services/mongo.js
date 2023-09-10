const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://next-reviews:sVUnNvuNRDX6IXIX@cluster0.qkywbgw.mongodb.net/game-reviews?retryWrites=true&w=majority';

mongoose.connection.once('open', () => {
  console.log('Connected to database');
});

mongoose.connection.on('error', error => {
  console.log(error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = mongoConnect;
