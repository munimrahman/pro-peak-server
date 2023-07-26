/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const blogServices = require('../services');
const { HTTP_CREATED, HTTP_OK } = require('../../../utils/constants/constants');

const createBlog = catchError(async (req, res, next) => {
    const data = await blogServices.createBlogService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateBlog = catchError(async (req, res, next) => {
    const updatedBlog = await blogServices.updateBlogService(req.body, req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Updated Successfully.',
        data: updatedBlog,
    });
});

const createComment = catchError(async (req, res, next) => {
    const updatedBlog = await blogServices.createCommentService(req.body, req.params.id);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: 'Comment Added Successfully.',
        data: updatedBlog,
    });
});

const createReply = catchError(async (req, res, next) => {
    const updatedBlog = await blogServices.createReplyService(req.body, req.params.id);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: 'Reply Added Successfully.',
        data: updatedBlog,
    });
});

const getOneBlog = catchError(async (req, res, next) => {
    const blog = await blogServices.getOneBlogService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        blog,
    });
});

const getAllBlog = catchError(async (req, res, next) => {
    const data = await blogServices.getAllBlogService();
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        data,
    });
});

const deleteOneBlog = catchError(async (req, res, next) => {
    const response = await blogServices.deleteOneBlogService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Blog Deleted Successfully',
        deletedBlog: response,
    });
});

const deleteManyBlog = catchError(async (req, res, next) => {
    const response = await blogServices.deleteManyBlogService(req.body.ids);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Blogs Deleted Successfully',
        data: response,
    });
});

module.exports = {
    createBlog,
    updateBlog,
    createComment,
    createReply,
    getOneBlog,
    getAllBlog,
    deleteOneBlog,
    deleteManyBlog,
};
