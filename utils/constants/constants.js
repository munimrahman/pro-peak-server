const HTTP_CODE = {
    HTTP_INTERNAL_SERVER_ERROR: {
        code: 500,
        message: 'Internal Server Error',
    },
    HTTP_NOT_FOUND: {
        code: 404,
        message: 'Route Not Found',
    },
    HTTP_CREATED: {
        code: 201,
        message: 'Successfully Created',
    },
    HTTP_OK: {
        code: 200,
        message: 'Successfully Fetched',
    },
    HTTP_DELETE: {
        code: 204,
        message: 'Successfully Deleted',
    },
    HTTP_BAD_REQUEST: {
        code: 400,
        message: 'Bad Request',
    },
    HTTP_UNAUTHORIZED_REQUEST: {
        code: 401,
        message: 'Unauthorized Request',
    },
};

module.exports = HTTP_CODE;
