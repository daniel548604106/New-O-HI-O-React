const express = require('express');
const router = express.Router();
const { getUserData,getUserAvatar } = require('../controllers/userController.js');

router.route('/:id').get(getUserData);
router.route('/:id/avatar').get(getUserAvatar)
module.exports = router;
