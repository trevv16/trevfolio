process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const flash = require("express-flash");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");

// Configs
const initializePassport = require("./config/passport_config");

// Services
const { getUserByEmail, getUserById } = require("../services/dbService");

// Middlewares
const { checkAuth, checkNotAuth } = require("./middlewares/authControl");

initializePassport(
 passport,
 (email) => getUserByEmail(email),
 (id) => getUserById(id)
);

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(flash());
app.use(
 session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

/* POST sign up page. */
router.post("/signup", checkNotAuth, authCon.signUp);

/* POST sign in page. */
router.post("/signin", checkNotAuth, authCon.signIn);

/* POST sign out page. */
router.delete("/signout", checkAuth, authCon.signOut);

/* POST forgot page. */
router.post("/forgot", checkNotAuth, authCon.forgot);

router.post("/reset", checkNotAuth, authCon.reset);

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
 next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
 // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get("env") === "development" ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render("error");
});

module.exports = app;
