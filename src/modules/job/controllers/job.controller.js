/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const jobServices = require('../services');
const { HTTP_CREATED } = require('../../../utils/constants/constants');
const generateToken = require('../../../utils/helpers/generateToken');

const createJobPost = catchError(async (req, res, next) => {
    const data = await jobServices.registerUserService(req.body);

    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateUser = catchError(async (req, res, next) => {});

const getOneUser = catchError(async (req, res, next) => {});

const getAllUser = catchError(async (req, res, next) => {
    res.json('Get All Users');
});

const deleteOneUser = catchError(async (req, res, next) => {});

const deleteManyUser = catchError(async (req, res, next) => {});

module.exports = {
    createJobPost,
    updateUser,
    getOneUser,
    getAllUser,
    deleteOneUser,
    deleteManyUser,
};
