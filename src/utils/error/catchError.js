const catchErrors = (controller) => {
  return async (req, res, next) => {
    try {
      await controller(req, res, next);
      // TODO Delete Me
      console.log("from catch errors");
    } catch (error) {
      // TODO Delete Me
      console.log("From Error", error.name);
      next(error);
    }
  };
};

module.exports = catchErrors;
