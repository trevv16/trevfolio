const mongoose = require('mongoose');
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');

module.exports = {
  signUp: async (req, res, next) => {
    const { first_name, last_name, email, password } = req.body;
    const _id = mongoose.Types.ObjectId();
    try {
      const findUser = await User.findOne({ email }).select('+password');

      if (findUser) {
        return next(new ErrorResponse('User already exists', 401));
      }

      const user = await User.create({
        _id,
        first_name,
        last_name,
        email,
        password
      });

      sendToken(user, 201, res);
    } catch (err) {
      next(err);
    }
  },
  signIn: async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(
        new ErrorResponse('Please provide an email and password', 400)
      );
    }

    try {
      const user = await User.findOne({ email }).select('+password');

      if (!user) {
        return next(new ErrorResponse('Invalid Credentials', 401));
      }

      const isMatch = await user.comparePasswords(password);

      if (!isMatch) {
        return next(new ErrorResponse('Invalid Credentials', 401));
      }
      sendToken(user, 200, res);
    } catch (err) {
      next(err);
    }
  },
  signOut: async (req, res, next) => {
    res.send('Sign Out');
  },
  forgot: async (req, res, next) => {
    const { email } = req.body;
  },
  reset: async (req, res, next) => {
    res.send('Reset');
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
