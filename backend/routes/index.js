const express = require("express");

const router = express.Router();

// Middlewares
const { checkAuth, checkNotAuth } = require("../middlewares/authControl");

// Controllers
const authCon = require("../controllers/authController");

/* POST sign up page. */
router.post("/signup", checkNotAuth, authCon.signUp);

/* POST sign in page. */
router.post("/signin", checkNotAuth, authCon.signIn);

/* POST sign out page. */
router.delete("/signout", checkAuth, authCon.signOut);

/* POST forgot page. */
router.post("/forgot", checkNotAuth, authCon.forgot);

router.post("/reset", checkNotAuth, authCon.reset);

module.exports = router;
