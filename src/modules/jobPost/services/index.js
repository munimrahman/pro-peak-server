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
        sortBy,
        postDate,
        hiringManagerId,
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
        // Web Development, App Development // get like this from req.query
        // [{industry: 'Web Development'}, {industry: 'App Development'}] // need like this
        const industriesArray = industry.split(',').map((ind) => ind.trim());
        const industries = industriesArray.map((ind) => ({ industry: ind }));
        queries.industry = industries;
    }

    // set salary query
    if (salary) {
        // 2500-3500 // get like this from req.query
        // salary: {low: 0, high: 100} // need like this
        const salaryArray = salary.split('-').map((s) => s.trim());
        queries.salary = { low: salaryArray[0], high: salaryArray[1] };
    }

    // set job level query
    if (jobLevel) {
        // Entry Level, Mid Level // get like this from req.query
        // ['Entry Level', 'Mid Level'] // need like this
        const level = jobLevel.split(',').map((l) => l.trim());
        queries.jobLevel = level;
    }

    // set work place query
    if (workPlace) {
        // Remote, On Site // get like this from req.query
        // ['Remote', 'On Site'] // need like this
        const place = workPlace.split(',').map((p) => p.trim());
        queries.workPlace = place;
    }

    // set job type query
    if (jobType) {
        // Remote, On Site // get like this from req.query
        // ['Remote', 'On Site'] // need like this
        const type = jobType.split(',').map((t) => t.trim());
        queries.jobType = type;
    }

    // set tags query
    if (tags) {
        // React, JavaScript // get like this from req.query
        // ['React', 'JavaScript'] // need like this
        const tag = tags.split(',').map((t) => t.trim());
        queries.tags = tag;
    }

    // set location query
    if (location) {
        // Dhaka, Bangladesh // get like this from req.query
        // Dhaka, Bangladesh // need like this
        queries.location = location;
    }

    // set posted date query
    if (postDate) {
        // 7 // get like this from req.query
        // 2023-07-27T10:08:07.424Z // need like this
        const daysAgo = new Date();
        daysAgo.setDate(daysAgo.getDate() - parseInt(postDate));
        queries.postDate = daysAgo;
    }

    // set sorting query
    if (sortBy) {
        // createdAt // get like this from req.query
        // createdAt // need like this
        queries.sortBy = sortBy;
    }

    // set search query
    if (searchQuery) {
        const regex = new RegExp(searchQuery, 'i');
        queries.searchQuery = regex;
    }

    // set hiring manager query
    if (hiringManagerId) {
        queries.hiringManagerId = hiringManagerId;
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
