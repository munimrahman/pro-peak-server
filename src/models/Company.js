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
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        industry: {
            type: String,
            required: true,
        },
        companySize: {
            type: String,
            required: true,
        },
        foundedIn: {
            type: String,
            required: true,
        },
        workPlace: {
            type: String,
            required: true,
        },
        website: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        facebook: {
            type: String,
            required: true,
        },
        linkedin: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            required: true,
        },
        coverPhoto: {
            type: String,
            required: true,
        },
        hiringManager: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
