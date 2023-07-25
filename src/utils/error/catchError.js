const catchErrors = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    } catch (error) {
        // TODO Delete Me
        console.log('*******From Error*******\n', error.name);
        next(error);
    }
};

module.exports = catchErrors;
