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
const getAll = async (filters, queries) => {
    const oneMinuteAgo = new Date();
    oneMinuteAgo.setMinutes(oneMinuteAgo.getMinutes() - 10000);
    const titleQuery = 'react';
    const regex = new RegExp(titleQuery, 'i');
    const res = await JobPost.find({
        $or: [],
        salary: { $gte: 100, $lte: 400 },
        // jobLevel: 'Mid Level',
        // workPlace: 'Remote',
        // createdAt: { $gte: oneMinuteAgo },
        // jobType: 'Full Time',
        // location: 'Dhaka, Bangladesh',
        // tags: { $in: ['Node JS'] },
        // title: regex,
    })
        .skip(2)
        .limit(2)
        .sort('-salary -createdAt')
        .select('title salary jobLevel workPlace location tags');
    return { count: res.length, jobs: res };
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
