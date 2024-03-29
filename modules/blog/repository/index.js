/* eslint-disable object-curly-newline */
const Blog = require('../../../models/Blog');

const createOne = async (data) => {
    const res = await Blog.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = Blog.findById(id)
        .populate('author', 'name designation profilePhoto')
        .populate({
            path: 'comments',
            populate: [
                { path: 'author', select: 'name profilePhoto' },
                { path: 'replies.author', select: 'name profilePhoto' },
            ],
        });
    return res;
};

const getOneByEmail = async (email) => {
    const res = await Blog.findOne({ email });
    return res;
};

const updateOne = async (data, id) => {
    const updatedRes = await Blog.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedRes;
};

const createComment = async (data, blogId) => {
    const blog = await Blog.findById(blogId);
    blog.comments.push(data);
    await blog.save();

    const res = await Blog.findById(blogId)
        .populate('author', 'name designation profilePhoto')
        .populate({
            path: 'comments',
            populate: [
                { path: 'author', select: 'name profilePhoto' },
                { path: 'replies.author', select: 'name profilePhoto' },
            ],
        });

    return res;
};

const createCommentReply = async (reply, commentId, blogId) => {
    const blog = await Blog.findById(blogId);
    const comment = blog.comments.id(commentId);
    await comment.replies.push(reply);
    const res = await blog.save();
    return res;
};

// get all queries
const getAll = async (queries) => {
    const { author, tags, searchQuery, skip, limit } = queries;
    const filters = {};

    if (author) filters.author = author;
    if (tags) filters.tags = { $in: tags };
    if (searchQuery) filters.title = searchQuery;

    const res = await Blog.find(filters)
        .skip(skip)
        .limit(limit)
        .sort('-createdAt')
        .populate('author', 'name profilePhoto');
    const totalCount = await Blog.count(filters);
    return { totalCount, count: res.length, blogs: res };
};

const deleteOne = async (id) => {
    const res = Blog.findByIdAndDelete(id);
    return res;
};

const deleteMany = async (ids) => {
    console.log(ids);
    const res = Blog.deleteMany({ _id: { $in: ids } });
    return res;
};

module.exports = {
    createOne,
    updateOne,
    createComment,
    createCommentReply,
    getOneById,
    getOneByEmail,
    getAll,
    deleteOne,
    deleteMany,
};
