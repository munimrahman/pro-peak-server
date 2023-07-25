/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const userServices = require('../services');
const { HTTP_CREATED, HTTP_OK } = require('../../../utils/constants/constants');

const createUser = catchError(async (req, res, next) => {
    const data = await userServices.registerUserService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const logIn = catchError(async (req, res, next) => {
    const data = await userServices.loginUserService(req.body);

    if (!data) {
        return res.status(400).json({
            success: false,
            message: 'Invalid Email or Password',
        });
    }

    res.status(200).json({
        success: true,
        message: 'Logged In Successfully.',
        data,
    });
});

const updateUser = catchError(async (req, res, next) => {
    const updatedUser = await userServices.updateUserService(req.body, req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Updated Successfully.',
        data: updatedUser,
    });
});

const getOneUser = catchError(async (req, res, next) => {
    const user = await userServices.getOneUserService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        user,
    });
});

const getAllUser = catchError(async (req, res, next) => {
    const data = await userServices.getAllUserService();
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        data,
    });
});

const deleteOneUser = catchError(async (req, res, next) => {
    const response = await userServices.deleteOneUserService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'User Deleted Successfully',
        deletedUSer: response,
    });
});

const deleteManyUser = catchError(async (req, res, next) => {
    const response = await userServices.deleteManyUserService(req.body.ids);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Users Deleted Successfully',
        data: response,
    });
});

module.exports = {
    createUser,
    logIn,
    updateUser,
    getOneUser,
    getAllUser,
    deleteOneUser,
    deleteManyUser,
};
