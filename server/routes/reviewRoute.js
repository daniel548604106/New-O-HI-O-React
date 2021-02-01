const express = require('express')
const router = express.Router()
const { postReview, getReviews} = require('../controllers/reviewController')
const { protect } = require('../middleware/authMiddleware')
router.route('/').post(protect, postReview)
router.route('/:id').get(getReviews)

module.exports = router