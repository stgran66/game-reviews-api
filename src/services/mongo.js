const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

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
