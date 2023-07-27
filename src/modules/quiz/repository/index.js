/* eslint-disable object-curly-newline */
const Quiz = require('../../../models/Quiz');

const createOne = async (data) => {
    const res = await Quiz.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = Quiz.findById(id);
    return res;
};

const updateOne = async (data, id) => {
    const updatedRes = await Quiz.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedRes;
};

// TODO: get all companies query
const getAll = async (queries) => {
    const { industry, companySize, workPlace, searchQuery, skip, limit } = queries || {};
    const filters = {};

    if (industry) filters.industry = industry;
    if (companySize) filters.companySize = companySize;
    if (workPlace) filters.workPlace = workPlace;
    if (searchQuery) filters.name = searchQuery;

    const res = await Quiz.find(filters).skip(skip).limit(limit);
    const totalCount = await Quiz.countDocuments(filters);
    return { total: totalCount, count: res.length, quizzes: res };
};

const deleteOne = async (id) => {
    const res = Quiz.findByIdAndDelete(id);
    return res;
};

const deleteMany = async (ids) => {
    console.log(ids);
    const res = Quiz.deleteMany({ _id: { $in: ids } });
    return res;
};

module.exports = {
    createOne,
    updateOne,
    getOneById,
    getAll,
    deleteOne,
    deleteMany,
};