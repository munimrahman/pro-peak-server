const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobPostSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: [10, 'Title must be at least 10 characters'],
            maxLength: [40, 'Title is too long'],
        },
        description: {
            type: String,
            required: true,
            minLength: [10, 'Description must be at least 10 characters'],
        },
        industry: [String],
        salary: {
            type: Number,
            required: true,
        },
        jobLevel: {
            type: String,
            required: true,
        },
        experience: {
            type: String,
        },
        jobType: {
            type: String,
            required: true,
        },
        workPlace: {
            type: String,
            required: true,
        },
        deadline: {
            type: Date,
            required: true,
        },
        tags: {
            type: [String],
        },
        language: {
            type: [String],
        },
        featuredPhoto: {
            type: String,
            required: true,
        },
        coverPhoto: {
            type: String,
            required: true,
        },
        // TODO: extra
        // hiringManager: {
        //     name: String,
        //     id: {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User',
        //     },
        // },
        // applicants: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User',
        //     },
        // ],
    },
    { timestamps: true }
);

const JobPost = mongoose.model('JobPost', jobPostSchema);

module.exports = JobPost;
