const express = require('express')

const router = express.Router()
const { patchChat,getAllChats,getChat,addChatContent} = require('../controllers/chatController')
const { protect} = require('../middleware/authMiddleware')


router.route('/').patch(protect,patchChat).get(protect,getAllChats)
router.route('/:id').get(protect,getChat).patch(protect,addChatContent)
module.exports = router