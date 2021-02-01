const express = require('express')
const router = express.Router()
const { protect} = require('../middleware/authMiddleware')
const {getFavProducts, getFavShops,addToFavorite}  = require('../controllers/favoriteController.js')
router.route('/').patch(protect, addToFavorite)
router.route('/shops').get(getFavShops)
router.route('/products').get(protect,getFavProducts)

module.exports = router