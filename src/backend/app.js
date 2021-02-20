const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const flash = require('express-flash');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo')(session);
const errorHandler = require("./middlewares/error");

// Configs
const mongoConfig = require('./config/db_config');

// Routes
const authRouter = require('./routes/auth');
const v1_apiRouter = require('./routes/api_v1');
const v1_adminRouter = require('./routes/admin_v1');

const app = express();

if (process.env.NODE_ENV !== 'production') {
  mongoConfig.initializeMongo(
    mongoose,
    process.env.MONGO_DEV_USER,
    process.env.MONGO_DEV_PW,
    process.env.MONGO_DEV_DB_NAME
  );
} else {
  mongoConfig.initializeMongo(
    mongoose,
    process.env.MONGO_PROD_USER,
    process.env.MONGO_PROD_PW,
    process.env.MONGO_PROD_DB_NAME
  );
}

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie: {
      secure: process.env.NODE_ENV === 'production' ? true : false,
      maxAge: 4 * 60 * 60 * 1000
    }
  })
);
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Set Routes
app.use('/api/auth', authRouter);
app.use('/api/v1', v1_apiRouter);
app.use('/admin/v1', v1_adminRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('/*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// Should be last
app.use(errorHandler);

module.exports = app;
