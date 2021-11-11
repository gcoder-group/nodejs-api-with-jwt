var express = require('express');
var router = express.Router();
const passport = require('../config/passport');
const authController = require('../controllers/authController');

/* login route */
router.post('/login', passport.login,authController.login);

/* refresh route */
router.post('/refresh_token',authController.refresh_token);


module.exports = router;
