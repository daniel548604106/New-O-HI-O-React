const express = require('express');
const router = express.Router();
const { getUserData } = require('../controllers/userController.js');

router.route('/:id').get(getUserData);

module.exports = router;
