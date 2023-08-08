const mongoose = require('mongoose');

const { Schema } = mongoose;

const jobApplicationSchema = new Schema(
    {
        candidate: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
        coverLetter: {
            type: String,
            maxLength: [1000, 'Cover Letter is Too Long.'],
        },
        expectedSalary: {
            type: String,
            required: true,
        },
        joinDate: {
            type: String,
            required: true,
        },
        jobPostId: {
            type: Schema.Types.ObjectId,
            ref: 'JobPost',
        },
    },
    { timestamps: true }
);

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);

module.exports = JobApplication;
