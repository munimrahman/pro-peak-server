const JobPost = require('../../../models/JobPost');

const createOne = async (data) => {
    const jobPost = await JobPost.create(data);
    return jobPost;
};

const getOneById = async (id) => {};

const getOneByEmail = async (email) => {
    const jobPost = await JobPost.findOne({ email });
    return jobPost;
};

const updateOne = async (data, id) => {};

const getAll = async () => {};

const deleteOne = async (id) => {};

const deleteMany = async (ids) => {};

module.exports = {
    createOne,
    updateOne,
    getOneById,
    getOneByEmail,
    getAll,
    deleteOne,
    deleteMany,
};
