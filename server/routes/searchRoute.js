const express = require('express')
const router = express.Router()

const { getSearchedProducts } = require('../controllers/searchController')


router.route('/').get(getSearchedProducts)

module.exports = router