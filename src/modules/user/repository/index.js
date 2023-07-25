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

const getAll = async () => {
    const res = await User.find({});
    return { count: res.length, users: res };
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
