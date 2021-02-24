const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const subscriberSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    minlength: 1,
    trim: true
  },
  lastName: {
    type: String,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Provide an email'],
    set: (v) => v.toLowerCase(),
    trim: true
  },
  main_newsletter: {
    type: Boolean,
    default: true
  },
  subscribed_to: [
    {
      subscribe_date: {
        type: Date,
        default: Date.now()
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

module.exports = Subscriber;
