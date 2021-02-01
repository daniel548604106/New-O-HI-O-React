const express = require('express')
const router = express.Router()
const { protect} = require('../middleware/authMiddleware')
const {getFavProducts, getFavShops,addFavProduct}  = require('../controllers/favoriteController.js')
router.route('/products').get(protect,getFavProducts).patch(protect,addFavProduct)
router.route('/shops').get(getFavShops).post
module.exports = router