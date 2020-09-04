const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");

// Lean Queries

const gallerySchema = new mongoose.Schema({
 _id: mongoose.Schema.Types.ObjectId,
 title: {
  type: String,
  minlength: 1,
  maxlength: 160,
  required: [true, "Provide a gallery title"],
  trim: true,
 },
 media: [
  {
   type: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, "Provide a media type"],
    trim: true,
   },
   url: {
    type: String,
    match:
     "/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/",
    required: [true, "Provide media url"],
    trim: true,
    set: (v) => v.toLowerCase(),
   },
   caption: {
    type: String,
    minlength: 1,
    maxlength: 160,
    required: [true, "Provide a caption"],
    trim: true,
   },
   size: {
    width: {
     type: Number,
     min: 1,
     trim: true,
    },
    height: {
     type: Number,
     min: 1,
     trim: true,
    },
    units: {
     type: String,
     minlength: 1,
     maxlength: 10,
     required: [true, "Provide a size units"],
     enum: ["px", "in"],
     set: (v) => v.toLowerCase(),
     trim: true,
    },
   },
  },
 ],
 description: {
  type: String,
  minlength: 1,
  maxlength: 160,
  required: [true, "Provide a gallery description"],
  trim: true,
 },
 thumbnail: {
  type: String,
  match:
   "/(https?://)?(www.)?[-a-zA-Z0-9@:%._+~#=]{2,256}.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/",
  required: [true, "Provide thumbnail url"],
  trim: true,
  set: (v) => v.toLowerCase(),
 },
 published: {
  type: Boolean,
  required: true,
  trim: true,
 },
});

gallerySchema.plugin(timestamps);

const Gallery = mongoose.model("Gallery", gallerySchema, "galleries");

module.exports = Gallery;
