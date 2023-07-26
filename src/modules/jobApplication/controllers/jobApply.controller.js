/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const jobApplicationServices = require('../services');
const { HTTP_CREATED, HTTP_OK } = require('../../../utils/constants/constants');

const createJobApplication = catchError(async (req, res, next) => {
    const data = await jobApplicationServices.createJobApplicationService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateJobApplication = catchError(async (req, res, next) => {
    const updatedJobApplication = await jobApplicationServices.updateJobApplicationService(
        req.body,
        req.params.id
    );
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Updated Successfully.',
        data: updatedJobApplication,
    });
});

const getOneJobApplication = catchError(async (req, res, next) => {
    const jobApplication = await jobApplicationServices.getOneJobApplicationService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        jobApplication,
    });
});

const getAllJobApplication = catchError(async (req, res, next) => {
    const data = await jobApplicationServices.getAllJobApplicationService();
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        data,
    });
});

const deleteOneJobApplication = catchError(async (req, res, next) => {
    const response = await jobApplicationServices.deleteOneJobApplicationService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Job Application Deleted Successfully',
        deletedJobApplication: response,
    });
});

const deleteManyJobApplication = catchError(async (req, res, next) => {
    const response = await jobApplicationServices.deleteManyJobApplicationService(req.body.ids);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Job Applications Deleted Successfully',
        data: response,
    });
});

module.exports = {
    createJobApplication,
    updateJobApplication,
    getOneJobApplication,
    getAllJobApplication,
    deleteOneJobApplication,
    deleteManyJobApplication,
};
