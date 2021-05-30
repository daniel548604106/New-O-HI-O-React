const express = require('express');
const router = express.Router();
const { getUserData,getUserAvatar,getUsers } = require('../controllers/userController.js');
router.route('/').get(getUsers)
// router.route('/user/:id').get(getUserData);
router.route('/user/:id/avatar').get(getUserAvatar)
module.exports = router;
