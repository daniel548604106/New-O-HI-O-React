const express = require('express')
const router = express.Router()
const { addNewShop ,getHotShop } = require('../controllers/shopController')
const { protect } = require('../middleware/authMiddleware')


router.route('/').post(protect,addNewShop)
router.route('/hot').get(getHotShop)


module.exports = router