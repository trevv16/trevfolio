const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const timestamps = require('mongoose-timestamp');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  first_name: {
    type: String,
    minlength: 1,
    required: [true, 'Provide a first name'],
    trim: true
  },
  last_name: {
    type: String,
    minlength: 1,
    required: [true, 'Provide a last name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Provide an email'],
    set: (v) => v.toLowerCase(),
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Provide a password'],
    select: false
  },
  resetPasswordToken: {
    type: String
  },
  resetPassowrdExpire: {
    type: Date
  },
  social_links: [
    {
      title: {
        type: String,
        minlength: 1,
        maxlength: 80
      },
      url: {
        type: String,
        match:
          '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
        trim: true,
        set: (v) => v.toLowerCase()
      }
    }
  ]
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }

  this.password = await hashing(this.password);
  next();
});

async function hashing(pwd) {
  const salt = await bcrypt.genSalt(process.env.BCRYPT_SALT);
  return await bcrypt.hash(pwd, salt);
}

userSchema.methods.comparePasswords = async function (pwd) {
  return await bcrypt.compare(pwd, this.password);
};

userSchema.methods.getSignedToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE
  });
};

userSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString('hex');

  this.resetPasswordToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.resetPassowrdExpire = Date.now() + 10 * (60 * 1000);

  return resetToken;
};

userSchema.plugin(timestamps);

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
