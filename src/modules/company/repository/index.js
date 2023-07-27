/* eslint-disable object-curly-newline */
const Company = require('../../../models/Company');

const createOne = async (data) => {
    const res = await Company.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = Company.findById(id);
    return res;
};

const getOneByEmail = async (email) => {
    const res = await Company.findOne({ email });
    return res;
};

const updateOne = async (data, id) => {
    const updatedRes = await Company.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedRes;
};
// get all companies query
const getAll = async (queries) => {
    const { industry, companySize, workPlace, skip, limit } = queries;
    const filters = {};

    if (industry) filters.industry = industry;
    if (companySize) filters.companySize = companySize;
    if (workPlace) filters.workPlace = workPlace;

    const res = await Company.find(filters).skip(skip).limit(limit);
    const totalCount = await Company.countDocuments(filters);
    return { total: totalCount, count: res.length, companies: res };
};

const deleteOne = async (id) => {
    const res = Company.findByIdAndDelete(id);
    return res;
};

const deleteMany = async (ids) => {
    console.log(ids);
    const res = Company.deleteMany({ _id: { $in: ids } });
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
