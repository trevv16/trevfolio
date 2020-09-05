import { Schema, model } from 'mongoose';
import timestamps from 'mongoose-timestamp';

// Lean Queries

const mailingListSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, 'Provide a mailing list name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Provide a description'],
    minlength: 1,
    maxlength: 260,
    trim: true
  },
  blog: {
    type: Schema.Types.ObjectId,
    ref: 'Blog',
    required: [true, 'Provide a blog ID']
  },
  audience: [
    {
      name: {
        type: String,
        minlength: 1,
        maxlength: 160,
        required: [true, 'Provide a member name'],
        trim: true
      },
      email: {
        type: String,
        required: [true, 'Provide an email'],
        set: (v) => v.toLowerCase(),
        match:
          '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/', // eslint-disable-line max-len
        trim: true
      },
      join_message: {
        type: String,
        minlength: 1,
        maxlength: 200,
        trim: true
      },
      subscribed: {
        type: Date,
        required: true,
        default: Date.now(),
        trim: true
      },
      unsubscribed: {
        type: Date,
        trim: true
      },
      received_emails: [{ type: Schema.Types.ObjectId, ref: 'Email' }]
    }
  ],
  all_emails: [{ type: Schema.Types.ObjectId, ref: 'Email' }],
  published: {
    type: Boolean,
    required: true,
    trim: true
  }
});

mailingListSchema.plugin(timestamps);

const MailingList = model('MailingList', mailingListSchema, 'mailing_lists');

export default MailingList;