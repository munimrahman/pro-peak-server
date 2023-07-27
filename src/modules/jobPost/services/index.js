/* eslint-disable radix */
const jobPostRepository = require('../repository');

const createJobPostService = async (data) => {
    const job = await jobPostRepository.createOne(data);
    return job;
};

const updateJobPostService = async (data, id) => {
    const updatedJobPost = await jobPostRepository.updateOne(data, id);
    return updatedJobPost;
};

const getOneJobPostService = async (id) => {
    const job = await jobPostRepository.getOneById(id);
    return job;
};

// get all service
const getAllJobPostService = async (query) => {
    const {
        page = 1,
        limit = 5,
        industry,
        salary,
        jobLevel,
        workPlace,
        jobType,
        location,
        tags,
        searchQuery,
        sort,
        date,
    } = query;

    const queries = {};

    // set pagination
    if (page) {
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }

    // set industry query
    if (industry) {
        const industries = [];
    }

    const data = await jobPostRepository.getAll(queries);
    return data;
};

const deleteOneJobPostService = async (id) => {
    const res = await jobPostRepository.deleteOne(id);
    return res;
};

const deleteManyJobPostService = async (ids) => {
    const res = await jobPostRepository.deleteMany(ids);
    return res;
};

module.exports = {
    createJobPostService,
    updateJobPostService,
    getOneJobPostService,
    getAllJobPostService,
    deleteOneJobPostService,
    deleteManyJobPostService,
};
