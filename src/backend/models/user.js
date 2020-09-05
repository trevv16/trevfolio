import { Schema, model } from 'mongoose';
import timestamps from 'mongoose-timestamp';

// Lean Queries

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  first_name: {
    type: String,
    minlength: 1,
    required: [true, 'Provide a first name'],
    trim: true,
  },
  last_name: {
    type: String,
    minlength: 1,
    required: [true, 'Provide a last name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Provide an email'],
    set: (v) => v.toLowerCase(),
    match:
      '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Provide a password'],
  },
  social_links: [
    {
      title: {
        type: String,
        minlength: 1,
        maxlength: 80,
      },
      url: {
        type: String,
        match:
          '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
        required: [true, 'Provide media url'],
        trim: true,
        set: (v) => v.toLowerCase(),
      },
    },
  ],
});

userSchema.plugin(timestamps);

const User = model('User', userSchema, 'users');

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
  checkPassword: async function (inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  /**
   * Called when first saving users password to the db
   * @param  {String} plainTextPassword
   */
  hashPassword: async function (plainTextPassword) {
    return bcrypt.hashSync(plainTextPassword, 10);
  },
  /**
   * @returns  {String} email from MongoDB
   */
  privateEmail: async function () {
    return obfuscate(this.email);
  },
};

/**
 ******************* Hooks
 */

/**
 *
 * @param  {function} next
 */
userSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('models/user.js =======NO PASSWORD PROVIDED=======');
    next();
  } else {
    console.log('models/user.js hashPassword in pre save');
    this.password = this.hashPassword(this.password);
    next();
  }
});

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

export default User;