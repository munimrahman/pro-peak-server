/* eslint-disable consistent-return */
/* eslint-disable func-names */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const { Schema } = mongoose;

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
            unique: [true, 'Email Already Exists'],
        },
        mobile: {
            type: String,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
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
        socialMedia: {
            facebook: String,
            linkedin: String,
            twitter: String,
            github: String,
        },
        role: {
            type: String,
            enum: ['candidate', 'recruiter', 'admin'],
            required: [true, 'Role is Required'],
        },

        viewedBy: {
            type: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'User',
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
        // eslint-disable-next-line prettier/prettier
    },
);

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    const { password } = this;
    const hashedPassword = bcrypt.hashSync(password);
    this.password = hashedPassword;
    next();
});

userSchema.methods.comparePassword = function (password, hash) {
    const isPasswordMatch = bcrypt.compareSync(password, hash);
    return isPasswordMatch;
};

userSchema.methods.generateConfirmationToken = function () {
    const confirmationToken = crypto.randomBytes(20).toString('hex');
    this.confirmationToken = confirmationToken;

    const date = new Date();
    date.setMinutes(date.getMinutes() + 10);
    this.confirmationTokenExpires = date;

    return confirmationToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
