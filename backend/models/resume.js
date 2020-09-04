const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');

// Lean Queries

const resumeSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  blogID: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }],
  name: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a resume title'],
    trim: true,
  },
  profile_img: {
    type: String,
    match:
      '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
    required: [true, 'Provide thumbnail url'],
    trim: true,
    set: (v) => v.toLowerCase(),
  },
  meta: {
    file_name: {
      type: String,
      minlength: 1,
      maxlength: 160,
      required: [true, 'Provide a resume file name'],
      trim: true,
    },
    purpose: {
      type: String,
      minlength: 1,
      maxlength: 160,
      required: [true, 'Provide a gallery purpose'],
      trim: true,
    },
    position_title: {
      type: String,
      minlength: 1,
      maxlength: 160,
      required: [true, 'Provide a position title'],
      trim: true,
    },
    company: {
      type: String,
      minlength: 1,
      maxlength: 160,
      required: [true, 'Provide a position company'],
      trim: true,
    },
  },
  profile: {
    headline: {
      type: String,
      minlength: 1,
      maxlength: 160,
      required: [true, 'Provide a resume headline'],
      trim: true,
    },
    website: {
      type: String,
      match:
        '/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/',
      required: [true, 'Provide profile website'],
      trim: true,
      set: (v) => v.toLowerCase(),
    },
    phone: {
      type: String,
      match: '/^(?:([2-9]d{2}) ?|[2-9]d{2}(?:-?| ?))[2-9]d{2}[- ]?d{4}$/',
      required: [true, 'Provide profile phone'],
      trim: true,
      set: (v) => v.toLowerCase(),
    },
  },
  summary: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a resume summary'],
    trim: true,
  },
  cover_letter: {
    type: String,
    minlength: 1,
    maxlength: 600,
    trim: true,
  },
  work_history: [
    {
      company: [
        {
          title: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a position title'],
            trim: true,
          },
          description: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a resume description'],
            trim: true,
          },
          duration: {
            from: {
              type: Date,
              required: true,
              default: Date.now(),
              trim: true,
            },
            to: {
              type: Date,
              required: true,
              default: Date.now(),
              trim: true,
            },
          },
        },
      ],
    },
  ],
  education: [
    {
      school: [
        {
          name: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a school name'],
            trim: true,
          },
          degree: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a degree type'],
            trim: true,
          },
          major: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a major'],
            trim: true,
          },
          minor: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a minor'],
            trim: true,
          },
          concentration: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a school name'],
            trim: true,
          },
          activities: {
            type: String,
            minlength: 1,
            maxlength: 160,
            required: [true, 'Provide a degree type'],
            trim: true,
          },
          duration: {
            from: {
              type: Date,
              required: true,
              default: Date.now(),
              trim: true,
            },
            to: {
              type: Date,
              required: true,
              default: Date.now(),
              trim: true,
            },
          },
        },
      ],
    },
  ],
  recommended_projects: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  ],
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill' }],
  published: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

resumeSchema.plugin(timestamps);

const Resume = mongoose.model('Resume', resumeSchema, 'resumes');

module.exports = Resume;
