const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobApplicationSchema = new Schema(
    {
        candidate: {
            name: {
                type: String,
                required: true,
            },
            id: {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        },
        coverLetter: {
            type: String,
            maxLength: [1000, 'Cover Letter is Too Long.'],
        },
        expectedSalary: {
            type: String,
            required: true,
        },
        experience: {
            type: Number,
            required: true,
        },
        resume: {
            type: String,
            required: true,
        },
        jobPost: {
            type: Schema.Types.ObjectId,
            ref: 'JobPost',
        },
    },
    { timestamps: true }
);

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
