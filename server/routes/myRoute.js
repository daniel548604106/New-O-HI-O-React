const express = require('express')
const router = express.Router()
const { patchMyData } = require('../controllers/myController')
const { protect} = require('../middleware/authMiddleware')


router.route('/').patch(protect, patchMyData)

module.exports = router