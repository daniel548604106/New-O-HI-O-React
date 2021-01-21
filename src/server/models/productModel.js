const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  seller: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
  },
  name: {
    type: String,
    require: [true, 'Please fill in the product name'],
  },
  description: {
    type: String,
    required: [true, 'Please write something about the product'],
  },
  fullPrice: {
    type: Number,
    required: [true, 'Please tell us the price'],
  },
  discountPrice: {
    type: Number,
  },
  discount: {
    type: Number,
  },
  category: {
    type: String,
    enum: ['shoes', 'men', 'women', 'clothes', 'pants', 'fashion', 'beauty', 'electronic'],
  },
  selections: [
    {
      selection: String,
      quantity: Number,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  totalInStock: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
