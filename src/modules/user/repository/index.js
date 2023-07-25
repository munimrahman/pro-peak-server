const User = require('../../../models/User');

const createOne = async (data) => {
    const user = await User.create(data);
    return user;
};

const getOneById = async (id) => {
    const user = User.findById(id);
    return user;
};

const getOneByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

const updateOne = async (data, id) => {
    const updatedUser = await User.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    });
    return updatedUser;
};

const getAll = async () => {
    const users = await User.find({});
    return { count: users.length, users };
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
