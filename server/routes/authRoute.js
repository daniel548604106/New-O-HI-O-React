const express = require('express');
const router = express.Router();
const { authSignup ,authLogin} = require('../controllers/authController');

router.route('/signup').post(authSignup);
router.route('/login').post(authLogin)
module.exports = router;
