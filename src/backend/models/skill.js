const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Lean Queries

const skillSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    pre: {
      type: String,
      required: true,
      trim: true
    },
    hover: {
      type: String,
      required: false,
      trim: true
    }
  },
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
  recent_proj: { type: Schema.Types.ObjectId, ref: 'Project' },
  published: {
    type: Boolean,
    required: true
  }
});

skillSchema.plugin(timestamps);

const Skill = mongoose.model('Skill', skillSchema, 'skills');

module.exports = Skill;
