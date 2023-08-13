const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 5005,
    DATABASE_URL: process.env.DB_URL || '',
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

module.exports = config;
