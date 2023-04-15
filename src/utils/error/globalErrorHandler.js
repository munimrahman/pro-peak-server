const { HTTP_INTERNAL_SERVER_ERROR } = require("../constants/constants");
const CustomError = require("./customError");

const globalErrorHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res
      .status(HTTP_INTERNAL_SERVER_ERROR.code)
      .json({ message: HTTP_INTERNAL_SERVER_ERROR.message });
  }
};

module.exports = globalErrorHandler;
