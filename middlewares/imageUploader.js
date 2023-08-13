const multer = require('multer');
const path = require('path');
const CustomError = require('../utils/error/customError');

function uploader(subfolderPath, allowedFileTypes, maxFileSize, errorMsg) {
    // File upload folder
    const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfolderPath}/`;

    // define the storage
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, UPLOADS_FOLDER);
        },
        filename: (req, file, cb) => {
            const fileExt = path.extname(file.originalname);
            const fileName = `${file.originalname
                .replace(fileExt, '')
                .toLowerCase()
                .split(' ')
                .join('-')}-${Date.now()}`;

            cb(null, fileName + fileExt);
        },
    });

    // prepare the final multer upload object
    const upload = multer({
        storage,
        limits: {
            fileSize: maxFileSize,
        },
        fileFilter: (req, file, cb) => {
            if (allowedFileTypes.includes(file.mimetype)) {
                cb(null, true);
            } else {
                cb(new CustomError(errorMsg));
            }
        },
    });

    return upload;
}

function imageUpload(req, res, next) {
    const upload = uploader(
        'avatars',
        ['image/jpeg', 'image/jpg', 'image/png'],
        1000000,
        'Only .jpg, jpeg or .png format allowed!'
    );

    // call the middleware function
    upload.any()(req, res, (err) => {
        if (err) {
            res.status(500).json({
                errors: {
                    avatar: {
                        msg: err.message,
                    },
                },
            });
        } else {
            next();
        }
    });
}

module.exports = imageUpload;
