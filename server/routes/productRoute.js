const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProduct,
  getCollectionProducts,
} = require('../controllers/productController');
router.route('/').get(getAllProducts);
router.route('/collection/:collection').get(getCollectionProducts);
router.route('/:id').get(getProduct);
module.exports = router;
