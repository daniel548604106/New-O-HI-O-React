const express = require('express')
const router = express.Router()
const { addNewShop ,getHotShop,getProductsFromShop,getShopInfo } = require('../controllers/shopController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').post(protect, addNewShop)
router.route('/hot').get(getHotShop)
router.route('/:account/products').get(getProductsFromShop)
router.route('/:account').get(getShopInfo)
module.exports = router