process.env.NODE_ENV !== "production" ? require("dotenv").config() : null;
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const flash = require("express-flash");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const methodOverride = require("method-override");

// Configs
const initializeMongo = require("./config/db_config");
const initializePassport = require("./config/passport_config");

// Services
const { getUserByEmail, getUserById } = require("./services/dbService");

initializeMongo(
 mongoose,
 process.env.MONOG_ATLAS_USER,
 process.env.MONGO_ATLAS_PW,
 process.env.MONGO_ATLAS_DB_NAME
);

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
// app.use(cors());
app.use(
 session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
   url: `mongodb+srv://${process.env.MONOG_ATLAS_USER}:${process.env.MONGO_ATLAS_PW}@dev-rv8ag.mongodb.net/${process.env.MONGO_ATLAS_DB_NAME}?retryWrites=true&w=majority`,
   collection: process.env.SESSION_STORE_COLLECTION,
   autoRemove: "disabled",
   touchAfter: 90,
   secret: process.env.SESSION_SECRET,
  }),
  cookie: {
   maxAge: 4 * 60 * 60 * 1000,
  },
 })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Set Routes
app.use("/", indexRouter);
app.use("/user", usersRouter);

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
