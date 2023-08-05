/* eslint-disable consistent-return */
/* eslint-disable func-names */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const peopleSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
        },
        profilePhoto: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        // eslint-disable-next-line prettier/prettier
    },
);

const People = mongoose.model('People', peopleSchema);
module.exports = People;
