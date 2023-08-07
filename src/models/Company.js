const mongoose = require('mongoose');

const { Schema } = mongoose;

const companySchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            minLength: [1, 'Company name must be at least 1 character'],
            maxLength: [100, 'Company Name is too long'],
        },
        motto: {
            type: String,
        },
        location: {
            type: String,
        },
        description: {
            type: String,
        },
        industry: {
            type: String,
        },
        companySize: {
            type: String,
        },
        foundedIn: {
            type: String,
        },
        workPlace: {
            type: String,
        },
        website: {
            type: String,
        },
        phone: {
            type: String,
        },
        email: {
            type: String,
        },
        facebook: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        logo: {
            type: String,
        },
        coverPhoto: {
            type: String,
        },
        totalPostedJob: {
            type: Number,
        },
        rating: [
            {
                name: String,
                rate: Number,
                description: String,
            },
        ],
        hiringManager: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
