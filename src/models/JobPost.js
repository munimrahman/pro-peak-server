const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobPostSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minLength: [10, "Title must be at least 10 characters"],
    maxLength: [40, "Title is too long"],
  },
  description: {
    type: String,
    required: true,
    minLength: [10, "Description must be at least 10 characters"],
    maxLength: [500, "Description is too long"],
  },
  location: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  experience: {
    type: String,
  },
  skills: {
    type: [String],
    required: true,
  },
  industry: [String],
  postingDate: {
    type: Date,
    default: Date.now,
  },
  deadline: {
    type: Date,
    required: true,
  },
  hiringManager: {
    name: String,
    id: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  applicants: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;
