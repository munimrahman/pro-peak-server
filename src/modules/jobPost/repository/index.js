/* eslint-disable object-curly-newline */
const JobPost = require('../../../models/JobPost');

const createOne = async (data) => {
    const res = await JobPost.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = JobPost.findById(id);
    return res;
};

const getOneByEmail = async (email) => {
    const res = await JobPost.findOne({ email });
    return res;
};

const updateOne = async (data, id) => {
    const updatedRes = await JobPost.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedRes;
};

// get all query
const getAll = async (queries) => {
    const {
        skip,
        limit,
        industry,
        salary,
        jobLevel,
        workPlace,
        jobType,
        tags,
        location,
        postDate,
        sortBy,
        searchQuery,
    } = queries;
    // set final query
    const filters = {
        // $or: [...industry],
        // salary: { $gte: low, $lte: high },
        // jobLevel: { $in: [...jobLevel] },
        // workPlace: { $in: workPlace },
        // jobType: { $in: jobType },
        // tags: { $in: tags },
        // location,
        // createdAt: { $gte: postDate },
        // title: searchQuery,
    };

    if (industry) filters.$or = industry;
    if (salary) filters.salary = { $gte: salary.low, $lte: salary.high };
    if (jobLevel) filters.jobLevel = { $in: jobLevel };
    if (workPlace) filters.workPlace = { $in: workPlace };
    if (jobType) filters.jobType = { $in: jobType };
    if (tags) filters.tags = { $in: tags };
    if (location) filters.location = location;
    if (postDate) filters.createdAt = { $gte: postDate };
    if (searchQuery) filters.title = searchQuery;

    const res = await JobPost.find(filters)
        .skip(skip)
        .limit(limit)
        .sort(`${sortBy} title`)
        .select('title salary location tags');
    const countDocument = await JobPost.countDocuments({});
    return { totalCount: countDocument, count: res.length, jobs: res };
};

const deleteOne = async (id) => {
    const res = JobPost.findByIdAndDelete(id);
    return res;
};

const deleteMany = async (ids) => {
    console.log(ids);
    const res = JobPost.deleteMany({ _id: { $in: ids } });
    return res;
};

module.exports = {
    createOne,
    updateOne,
    getOneById,
    getOneByEmail,
    getAll,
    deleteOne,
    deleteMany,
};
