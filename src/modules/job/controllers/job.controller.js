/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const jobPostServices = require('../services');
const { HTTP_CREATED, HTTP_OK } = require('../../../utils/constants/constants');

const createJobPost = catchError(async (req, res, next) => {
    const data = await jobPostServices.createJobPostService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateJobPost = catchError(async (req, res, next) => {
    const updatedJobPost = await jobPostServices.updateJobPostService(req.body, req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Updated Successfully.',
        data: updatedJobPost,
    });
});

const getOneJobPost = catchError(async (req, res, next) => {
    const jobPost = await jobPostServices.getOneJobPostService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        jobPost,
    });
});

const getAllJobPost = catchError(async (req, res, next) => {
    const data = await jobPostServices.getAllJobPostService();
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        data,
    });
});

const deleteOneJobPost = catchError(async (req, res, next) => {
    const response = await jobPostServices.deleteOneJobPostService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Job Post Deleted Successfully',
        deletedJobPost: response,
    });
});

const deleteManyJobPost = catchError(async (req, res, next) => {
    const response = await jobPostServices.deleteManyJobPostService(req.body.ids);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Job Posts Deleted Successfully',
        data: response,
    });
});

module.exports = {
    createJobPost,
    updateJobPost,
    getOneJobPost,
    getAllJobPost,
    deleteOneJobPost,
    deleteManyJobPost,
};
