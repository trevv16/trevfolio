import { Schema, model } from 'mongoose';
import timestamps from 'mongoose-timestamp';

// Lean Queries

const skillSchema = new Schema({
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

const Skill = model('Skill', skillSchema, 'skills');

export default Skill;
