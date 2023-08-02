/* eslint-disable object-curly-newline */
const User = require('../../../models/User');

const createOne = async (data) => {
    const res = await User.create(data);
    return res;
};

const getOneById = async (id) => {
    const res = User.findById(id);
    return res;
};

const getOneByEmail = async (email) => {
    const res = await User.findOne({ email });
    return res;
};

const updateOne = async (data, id) => {
    const updatedRes = await User.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedRes;
};

// get all users
const getAll = async (queries) => {
    const { role, skills, hourlyRate, certification, searchQuery, skip, limit } = queries;
    const filters = {};

    if (role) filters.role = role;
    if (skills) filters.skills = skills;
    if (hourlyRate) filters.hourlyRate = hourlyRate;
    if (certification) filters.certification = certification;
    if (searchQuery) filters.name = searchQuery;

    const res = await User.find(filters).skip(skip).limit(limit);
    const totalCount = await User.countDocuments(filters);

    return { totalCount, count: res.length, users: res };
};

const deleteOne = async (id) => {
    const res = User.findByIdAndDelete(id);
    return res;
};

const deleteMany = async (ids) => {
    console.log(ids);
    const res = User.deleteMany({ _id: { $in: ids } });
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
