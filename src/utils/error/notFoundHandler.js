const CustomError = require('./customError');
const { HTTP_NOT_FOUND } = require('../constants/constants');

const notFoundHandler = (req, res, next) => {
    next(new CustomError(HTTP_NOT_FOUND.code, HTTP_NOT_FOUND.message));
};

module.exports = notFoundHandler;
