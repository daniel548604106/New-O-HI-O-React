const express = require('express')
const router = express.Router()
const { patchMyData,patchMyPhoto } = require('../controllers/myController')
const { protect} = require('../middleware/authMiddleware')
const { upload } = require('../tools/upload')

router.route('/').patch(protect, patchMyData)
router.route('/photo').patch(protect,upload.single('avatar'),patchMyPhoto)

module.exports = router