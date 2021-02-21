const express = require('express')
const router = express.Router()
const { postNewOrder,getAllOrders} = require('../controllers/orderController')
const { protect} = require('../middleware/authMiddleware')

router.route('/').post(protect,postNewOrder).get(protect,getAllOrders)

module.exports = router