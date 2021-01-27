const express = require('express')
const { getBanners }  = require('../controllers/bannerController')
const router = express.Router()


router.route('/').get(getBanners)


module.exports = router