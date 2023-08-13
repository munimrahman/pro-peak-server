const cloudinary = require('cloudinary');
const config = require('./index');

const cloudinaryConfig = (req, res, next) => {
    cloudinary.config({
        cloud_name: config.CLOUDINARY_NAME,
        api_key: config.CLOUDINARY_API_KEY,
        api_secret: config.CLOUDINARY_API_SECRET,
    });
    next();
};

module.exports = { cloudinaryConfig, uploader: cloudinary.uploader };
