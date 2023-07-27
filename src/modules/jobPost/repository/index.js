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
    console.log(queries);
    const {
        skip,
        limit,
        industry = [],
        salary: { low = 0, high = Infinity } = {},
        jobLevel = [],
        workPlace = [],
        jobType = [],
        tags = [],
        location,
        postDate,
        sortBy,
    } = queries;

    const titleQuery = 'react';
    const regex = new RegExp(titleQuery, 'i');
    console.log(low, high);
    const res = await JobPost.find({
        // $or: [...industry],
        // salary: { $gte: low, $lte: high },
        // jobLevel: { $in: [...jobLevel] }, // TODO: not work if pass empty array
        // workPlace: { $in: workPlace },
        // jobType: { $in: jobType },
        // tags: { $in: tags },
        // location, // TODO: if empty string then not working
        // createdAt: { $gte: postDate },
        // title: regex,
    })
        .skip(skip)
        .limit(limit)
        .sort(`${sortBy} title`)
        .select('title salary location');
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
