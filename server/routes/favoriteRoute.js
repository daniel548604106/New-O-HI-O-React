const express = require('express')
const router = express.Router()
const { protect} = require('../middleware/authMiddleware')
const {getFavList,addToFavorite}  = require('../controllers/favoriteController.js')
router.route('/').patch(protect, addToFavorite).get(protect,getFavList)

module.exports = router