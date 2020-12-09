const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const pageSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  page_name: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide the page name'],
    trim: true
  },
  route: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide the page url'],
    trim: true
  },
  type: {
    type: String,
    minlength: 1,
    maxlength: 160,
    enum: ['public', 'admin', 'blog'],
    set: (v) => v.toLowerCase(),
    required: [true, 'Provide the page type'],
    trim: true
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 80,
    trim: true
  },
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Gallery' }],
  status: {
    type: String,
    required: true,
    enum: ['published', 'draft'],
    trim: true
  },
  content: {
    type: String,
    required: [true, 'Provide page content'],
    trim: true
  },
  primary_media_url: {
    type: String,
    match:
      '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
    required: [true, 'Provide media url'],
    set: (v) => v.toLowerCase(),
    trim: true
  },
  primary_link: {
    type: String,
    required: [true, 'Provide primary link'],
    set: (v) => v.toLowerCase(),
    trim: true
  }
});

pageSchema.plugin(timestamps);

const Page = mongoose.model('Page', pageSchema, 'pages');

module.exports = Page;
