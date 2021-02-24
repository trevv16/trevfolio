const express = require('express');

const router = express.Router();

// Controllers
const authCon = require('../controllers/authController');

/* POST sign up page. */
router.post('/signup', authCon.signUp);

/* POST sign in page. */
router.post('/signin', authCon.signIn);

/* POST forgot page. */
router.post('/forgot', authCon.forgot);

router.put('/reset/:resetToken', authCon.reset);

module.exports = router;
