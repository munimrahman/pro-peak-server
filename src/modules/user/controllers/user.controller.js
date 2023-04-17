/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const userServices = require('../services');
const { HTTP_CREATED } = require('../../../utils/constants/constants');
const generateToken = require('../../../utils/helpers/generateToken');

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

const updateUser = catchError(async (req, res, next) => {});

const getOneUser = catchError(async (req, res, next) => {});

const getAllUser = catchError(async (req, res, next) => {});

const deleteOneUser = catchError(async (req, res, next) => {});

const deleteManyUser = catchError(async (req, res, next) => {});

module.exports = {
    createUser,
    logIn,
    updateUser,
    getOneUser,
    getAllUser,
    deleteOneUser,
    deleteManyUser,
};
