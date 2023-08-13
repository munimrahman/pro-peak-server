/* eslint-disable object-curly-newline */
/* eslint-disable radix */
const blogRepository = require('../repository');

const createBlogService = async (data) => {
    const blog = await blogRepository.createOne(data);
    return blog;
};

const updateBlogService = async (data, id) => {
    const updatedBlog = await blogRepository.updateOne(data, id);
    return updatedBlog;
};

const createCommentService = async (data, id) => {
    const updatedBlog = await blogRepository.createComment(data, id);
    return updatedBlog;
};

const createReplyService = async (data, blogId) => {
    const { author, content, commentId } = data;
    const updatedBlog = await blogRepository.createCommentReply(
        { author, content },
        commentId,
        blogId
    );
    return updatedBlog;
};

const getOneBlogService = async (id) => {
    const blog = await blogRepository.getOneById(id);
    return blog;
};

// get all blogs
const getAllBlogService = async (query) => {
    const { author, tags, searchQuery, page = 1, limit = 5 } = query;
    const queries = { author };

    // set pagination
    if (page) {
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }
    // set search query
    if (searchQuery) {
        const regex = new RegExp(searchQuery, 'i');
        queries.searchQuery = regex;
    }
    // set tags query
    if (tags) {
        // React, JavaScript // get like this from req.query
        // ['React', 'JavaScript'] // need like this
        const tag = tags.split(',').map((t) => t.trim());
        queries.tags = tag;
    }

    const data = await blogRepository.getAll(queries);
    return data;
};

const deleteOneBlogService = async (id) => {
    const res = await blogRepository.deleteOne(id);
    return res;
};

const deleteManyBlogService = async (ids) => {
    const res = await blogRepository.deleteMany(ids);
    return res;
};

module.exports = {
    createBlogService,
    updateBlogService,
    createCommentService,
    createReplyService,
    getOneBlogService,
    getAllBlogService,
    deleteOneBlogService,
    deleteManyBlogService,
};
