const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

const skillSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
  published: {
    type: Boolean,
    required: true
  }
});

skillSchema.plugin(timestamps);

const Skill = mongoose.model('Skill', skillSchema, 'skills');

module.exports = Skill;
