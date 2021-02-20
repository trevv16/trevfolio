const mongoose = require('mongoose');
const crypto = require('crypto');
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');
const sendEmail = require('../utils/sendEmail');

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

    try {
      const user = await User.findOne({ email });

      if (!user) {
        return next(new ErrorResponse('Email could not be sent', 404));
      }

      const resetToken = user.getResetPasswordToken();

      await user.save();
      let resetUrl;
      if (process.env.NODE_ENV !== 'production') {
        resetUrl = `${process.env.LOCALHOST_CLIENT}/resetpassword/${resetToken}`;
      } else {
        resetUrl = `${process.env.DOMAIN}/resetpassword/${resetToken}`;
      }

      const message = `<h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>`;

      try {
        await sendEmail({
          to: user.email,
          subject: 'Password Reset Confirmation',
          text: message
        });

        res.status(200).json({ success: true, data: 'Email Sent' });
      } catch (err) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save();

        return next(new ErrorResponse('Server: Email could not be sent', 500));
      }
    } catch (err) {
      next(err);
    }
  },
  reset: async (req, res, next) => {
    const resetPasswordToken = crypto
      .createHash('sha256')
      .update(req.params.resetToken)
      .digest('hex');

    try {
      const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() }
      });

      if (!user) {
        return next(new ErrorResponse('Invalid Reset Token', 404));
      }

      user.password = req.body.password;
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;

      await user.save();

      res.status(201).json({
        success: true,
        data: 'Password Reset Success'
      });
    } catch (err) {
      next(err);
    }
  }
};

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken();
  res.status(statusCode).json({ success: true, token });
};
