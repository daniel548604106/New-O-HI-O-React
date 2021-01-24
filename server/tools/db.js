const mongoose = require('mongoose');
const DB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
  }
};

module.exports = DB;
