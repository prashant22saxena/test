const express = require('express');
const router = express.Router();
const controller = require('../controllers/sign_up_log_in');
router.post('/sign-up',controller.sign_up.sign_up);

module.exports = router;