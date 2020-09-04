const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Lean Queries

const blogSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    minlength: 1,
    maxlength: 60,
    required: [true, 'Provide a blog name'],
    trim: true,
  },
  slug: {
    type: String,
    minlength: 1,
    maxlength: 60,
    required: [true, 'Provide a blog slug'],
    match: '/^[a-z0-9]+(?:-[a-z0-9]+)*$/',
    set: (v) => v.toLowerCase(),
    trim: true,
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a blog description'],
    trim: true,
  },
  thumbnail: {
    type: String,
    match:
      '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
    required: [true, 'Provide thumbnail url'],
    trim: true,
    set: (v) => v.toLowerCase(),
  },
  media: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Media' }],
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  published: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

blogSchema.plugin(timestamps);

const Blog = mongoose.model('Blog', blogSchema, 'blogs');

module.exports = Blog;
