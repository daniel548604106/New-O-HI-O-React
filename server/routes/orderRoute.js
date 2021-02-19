const express = require('express')
const router = express.Router()
const { postNewOrder} = require('../controllers/orderController')
const { protect} = require('../middleware/authMiddleware')

router.route('/').post(protect,postNewOrder)

module.exports = router