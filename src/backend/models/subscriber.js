const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const subscriberSchema = new mongoose.Schema({
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
  subscribed_to: [
    {
      subscribe_date: {
        type: Date,
        default: null
      },
      unsubscribe_date: {
        type: Date,
        default: null
      },
      blog: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
    }
  ]
});

subscriberSchema.plugin(timestamps);

const Subscriber = mongoose.model(
  'Subscriber',
  subscriberSchema,
  'subscribers'
);

/**
 ******************* Virtuals
 */

/**
 * Virtual for subscriber's full name
 */
subscriberSchema
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

module.exports = Subscriber;
