const express = require('express');
const router = express.Router();
const { seller, protect} = require('../middleware/authMiddleware')
const {
  getAllProducts,
  getProduct,
  getCollectionProducts,
  getDiscountedProducts,
  getRecommendedProducts,
  addNewProduct,
} = require('../controllers/productController');
router.route('/').get(getAllProducts).post(protect, seller, addNewProduct)
router.route('/discount').get(getDiscountedProducts)
router.route('/collection/:collection').get(getCollectionProducts);
router.route('/product/:id').get(getProduct);
router.route('/recommendation').get(getRecommendedProducts)
module.exports = router;
