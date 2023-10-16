const mongoose = require('mongoose');
require('dotenv').config()


try {
  mongoose.connect(`${process.env.dbUrl}`);
  console.log('Database connected');
} catch (error) {
  console.log(error);
}

module.exports = mongoose;