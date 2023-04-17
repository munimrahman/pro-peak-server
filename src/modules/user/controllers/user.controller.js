const catchError = require('../../../utils/error/catchError');
const userServices = require('../services');
const { HTTP_CREATED } = require('../../../utils/constants/constants');

const createUser = catchError(async (req, res, next) => {
    const data = await userServices.createUserService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateUser = async () => {};

const getOneUser = async () => {};

const getAllUser = async () => {};

const deleteOneUser = async () => {};

const deleteManyUser = async () => {};

module.exports = {
    createUser,
    updateUser,
    getOneUser,
    getAllUser,
    deleteOneUser,
    deleteManyUser,
};
