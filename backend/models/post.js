const mongoose = require("mongoose");
var timestamps = require("mongoose-timestamp");

// Lean Queries

const postSchema = new mongoose.Schema({
 _id: mongoose.Schema.Types.ObjectId,
 blogID: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
 title: {
  type: String,
  minlength: 1,
  maxlength: 160,
  required: [true, "Provide a post title"],
  trim: true,
 },
 slug: {
  type: String,
  minlength: 1,
  maxlength: 60,
  match: "/^[a-z0-9]+(?:-[a-z0-9]+)*$/",
  required: [true, "Provide a post slug"],
  trim: true,
 },
 description: {
  type: String,
  minlength: 1,
  maxlength: 200,
  required: [true, "Provide a post description"],
  trim: true,
 },
 content: {
  type: String,
  minlength: 1,
  required: [true, "Provide a post content"],
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
 media: [{ type: mongoose.Schema.Types.ObjectId, ref: "Gallery" }],
 published: {
  type: Boolean,
  required: true,
  trim: true,
 },
});

postSchema.plugin(timestamps);

const Post = mongoose.model("Post", postSchema, "posts");

module.exports = Post;
