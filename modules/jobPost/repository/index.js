/* eslint-disable object-curly-newline */
const JobPost = require('../../../models/JobPost');

const createOne = async (data) => {
    const res = await JobPost.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = JobPost.findById(id)
        .populate('hiringManagerId', 'name email designation profilePhoto socialMedia')
        .populate('company', '-motto -description -createdAt -updatedAt -__v');
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
        hiringManagerId,
        companyId,
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
    if (hiringManagerId) filters.hiringManagerId = hiringManagerId;
    if (companyId) filters.company = companyId;

    const res = await JobPost.find(filters)
        .skip(skip)
        .limit(limit)
        .sort(`${sortBy} title`)
        .select('')
        .populate('company', 'name logo location');
    const countDocument = await JobPost.count(filters);
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
