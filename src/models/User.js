const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: [true, "Email Already Exists"],
    },
    mobile: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    profilePhoto: {
      type: String,
    },
    coverPhoto: {
      type: String,
    },
    bio: {
      type: String,
    },
    designation: {
      type: String,
    },
    language: [{ type: String }],

    role: {
      type: String,
      enum: ["candidate", "recruiter", "admin"],
      required: [true, "Role is Required"],
    },

    viewedBy: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },

    isAccountVerified: {
      type: Boolean,
      default: false,
    },

    confirmationToken: String,
    confirmationTokenExpires: Date,

    passwordChangeAt: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
