const Product = require('../models/productModel');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    console.log(products);
    res.status(200).json({
      products,
    });
  } catch (error) {
    console.log(error);
  }
};
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const product = await Product.findById(id);
    console.log(product);
    res.status(200).json({
      product,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllProducts, getProduct };
