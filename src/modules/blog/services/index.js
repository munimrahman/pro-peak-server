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

const getAllBlogService = async () => {
    const data = await blogRepository.getAll();
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
