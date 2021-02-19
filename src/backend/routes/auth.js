const express = require('express');

const router = express.Router();

// Controllers
const authCon = require('../controllers/authController');

// Middlewares
const { checkAuth } = require('../middlewares/authControl');

/* POST sign up page. */
router.post('/auth/signup', checkNotAuth, authCon.signUp);

/* POST sign in page. */
router.post('/auth/signin', checkNotAuth, authCon.signIn);

/* POST sign out page. */
router.delete('/auth/signout', checkAuth, authCon.signOut);

/* POST forgot page. */
router.post('/auth/forgot', checkNotAuth, authCon.forgot);

router.post('/auth/reset/:resetToken', checkNotAuth, authCon.reset);

module.exports = router;