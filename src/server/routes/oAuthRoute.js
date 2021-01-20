const express = require('express');
const router = express.Router();
const { oAuth } = require('../controllers/oAuthController');

router.route('/login').post(oAuth);

module.exports = router;
