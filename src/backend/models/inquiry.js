const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const inquirySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  firstName: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a first name'],
    trim: true
  },
  lastName: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a last name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Provide an email'],
    minlength: 1,
    maxlength: 260,
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Provide a message'],
    minlength: 1,
    maxlength: 260,
    trim: true
  }
});

inquirySchema.plugin(timestamps);

const Inquiry = mongoose.model('Inquiry', inquirySchema, 'inquiries');

module.exports = Inquiry;
