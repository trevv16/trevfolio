const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const timestamps = require('mongoose-timestamp');

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
    required: [true, 'Provide a password']
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

userSchema.plugin(timestamps);

const User = mongoose.model('User', userSchema, 'users');

/**
 ******************* Defined Functions
 */

/**
 *
 * @param {String} email raw value in MongoDB `email`
 * @return {String} privateEmail format -- '**@gmail.com'
 */
async function obfuscate(email) {
  const separatorIndex = email.indexOf('@');
  if (separatorIndex < 3) {
    // 'ab@gmail.com' -> '**@gmail.com'
    return (
      email.slice(0, separatorIndex).replace(/./g, '*') +
      email.slice(separatorIndex)
    );
  }
  // 'test42@gmail.com' -> 'te****@gmail.com'
  return (
    email.slice(0, 2) +
    email.slice(2, separatorIndex).replace(/./g, '*') +
    email.slice(separatorIndex)
  );
}

/**
 ******************* Virtuals
 */

/**
 * Virtual for user's full name
 */
userSchema
  .virtual('name')
  .get(function () {
    // To avoid errors in cases where an author does not have either a last name or first name
    // We want to make sure we handle the exception by returning an empty string for that case
    return this.first_name && this.last_name
      ? `${this.first_name} ${this.last_name}`
      : '';
  })
  .set(function (v) {
    // `v` is the value being set, so use the value to set
    // `firstName` and `lastName`.
    const first_name = v.substring(0, v.indexOf(' '));
    const last_name = v.substring(v.indexOf(' ') + 1);
    this.set({ first_name, last_name });
  });

/**
 ******************* Methods
 */
userSchema.methods = {
  /**
   * Called when checking if user input matches
   * their current saved password
   * @param  {String} inputPassword
   */
  checkPassword: async (inputPassword) => {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  /**
   * Called when first saving users password to the db
   * @param  {String} plainTextPassword
   */
  hashPassword: async (plainTextPassword) => {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
  /**
   * @returns  {String} email from MongoDB
   */
  privateEmail: async () => {
    return obfuscate(this.email);
  }
};

/**
 ******************* Hooks
 */

/**
 *
 * @param  {function} next
 */
userSchema.pre('save', (next) => {
  if (!this.password) {
    console.error('User: No password provided');
    next();
  } else {
    this.password = this.hashPassword(this.password);
    next();
  }
});

module.exports = User;
