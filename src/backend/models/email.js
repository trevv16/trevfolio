const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Lean Queries

const emailSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  type: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide an email type'],
    trim: true
  },
  template: {
    type: String,
    trim: true
  },
  from: { type: Schema.Types.ObjectId, ref: 'User' },
  to: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  subject: {
    type: String,
    minlength: 1,
    maxlength: 80,
    required: [true, 'Provide an email subject'],
    trim: true
  },
  media: [{ type: Schema.Types.ObjectId, ref: 'Gallery' }],
  status: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Provide email content'],
    trim: true
  },
  url: {
    type: String,
    match:
      '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
    required: [true, 'Provide media url'],
    set: (v) => v.toLowerCase(),
    trim: true
  }
});

emailSchema.plugin(timestamps);

const Email = mongoose.model('Email', emailSchema, 'emails');

module.exports = Email;
