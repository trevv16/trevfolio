import { Schema, model } from 'mongoose';
import timestamps from 'mongoose-timestamp';

const projectSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a project title'],
    trim: true
  },
  description: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a project description'],
    trim: true
  },
  thumbnail: {
    type: String,
    match:
      '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
    required: [true, 'Provide thumbnail url'],
    trim: true,
    set: (v) => v.toLowerCase()
  },
  demo_url: {
    type: String,
    match:
      '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
    required: [true, 'Provide thumbnail url'],
    trim: true,
    set: (v) => v.toLowerCase()
  },
  published: {
    type: Boolean,
    required: true,
    trim: true
  },
  skills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
  process: [
    {
      order: {
        type: Number,
        min: 1,
        max: 20,
        required: [true, 'Provide process order']
      },
      type: {
        type: String,
        required: [true, 'Provide process type']
      },
      content: {
        type: String,
        required: [true, 'Provide process content']
      }
    }
  ],
  github: { type: String }
});

projectSchema.plugin(timestamps);

const Project = model('Project', projectSchema, 'projects');

export default Project;
