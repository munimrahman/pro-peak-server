const dotenv = require('dotenv');

dotenv.config();

const config = {
    PORT: process.env.PORT || 5005,
    DATABASE_URL: process.env.DB_URL || '',
};

module.exports = config;
