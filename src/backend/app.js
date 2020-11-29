const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const methodOverride = require('method-override');

// Configs
const mongoConfig = require('./config/db_config');
const passConfig = require('./config/passport_config');

const app = express();

// Services
const dbService = require('./services/dbService');

// Routes
const authRouter = require('./routes/auth');
const v1_apiRouter = require('./routes/api_v1');
const v1_adminRouter = require('./routes/admin_v1');

const MongoStore = require('connect-mongo')(session);

if (process.env.NODE_ENV != 'production') {
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

passConfig.initializePassport(
  passport,
  (email) => dbService.getUserByEmail(email),
  (id) => dbService.getUserById(id)
);

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
      secure: process.env.NODE_ENV == 'production' ? true : false,
      maxAge: 4 * 60 * 60 * 1000
    }
  })
);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Set Routes
app.use('/auth', authRouter);
app.use('/api/v1', v1_apiRouter);
app.use('/admin/v1', v1_adminRouter);

if (process.env.NODE_ENV == 'production') {
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
  });
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404)); // eslint-disable-line no-undef
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;
