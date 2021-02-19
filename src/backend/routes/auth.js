const express = require('express');

const router = express.Router();

// Controllers
const authCon = require('../controllers/authController');

// Middlewares
const { checkAuth, checkNotAuth } = require('../middlewares/authControl');

/* POST sign up page. */
router.post('/signup', checkNotAuth, authCon.signUp);

/* POST sign in page. */
router.post('/signin', checkNotAuth, authCon.signIn);

/* POST sign out page. */
router.post('/signout', checkAuth, authCon.signOut);

/* POST forgot page. */
router.post('/forgot', checkNotAuth, authCon.forgot);

router.put('/reset/:resetToken', checkNotAuth, authCon.reset);

module.exports = router;