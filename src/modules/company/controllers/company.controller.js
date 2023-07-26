/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const companyServices = require('../services');
const { HTTP_CREATED, HTTP_OK } = require('../../../utils/constants/constants');

const createCompany = catchError(async (req, res, next) => {
    const data = await companyServices.createCompanyService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateCompany = catchError(async (req, res, next) => {
    const updatedCompany = await companyServices.updateCompanyService(req.body, req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Updated Successfully.',
        data: updatedCompany,
    });
});

const getOneCompany = catchError(async (req, res, next) => {
    const company = await companyServices.getOneCompanyService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        company,
    });
});

const getAllCompany = catchError(async (req, res, next) => {
    const data = await companyServices.getAllCompanyService();
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        data,
    });
});

const deleteOneCompany = catchError(async (req, res, next) => {
    const response = await companyServices.deleteOneCompanyService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Company Deleted Successfully',
        deletedCompany: response,
    });
});

const deleteManyCompany = catchError(async (req, res, next) => {
    const response = await companyServices.deleteManyCompanyService(req.body.ids);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Companies Deleted Successfully',
        data: response,
    });
});

module.exports = {
    createCompany,
    updateCompany,
    getOneCompany,
    getAllCompany,
    deleteOneCompany,
    deleteManyCompany,
};
