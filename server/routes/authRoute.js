const express = require('express');
const router = express.Router();
const { authFacebook } = require('../controllers/authController');

router.route('/facebook').get(authFacebook);

module.exports = router;
