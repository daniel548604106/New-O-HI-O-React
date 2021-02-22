const express = require('express');
const router = express.Router();
const { authSignup } = require('../controllers/authController');

router.route('/signup').post(authSignup);

module.exports = router;
