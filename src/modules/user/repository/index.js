const User = require('../../../models/User');

const createOne = async (data) => {
    const user = await User.create(data);
    return user;
};

const getOneById = async (id) => {};

const getOneByEmail = async (email) => {
    const user = await User.findOne({ email });
    return user;
};

const updateOne = async (data, id) => {};

const getAll = async () => {};

const deleteOne = async (id) => {};

const deleteMany = async (ids) => {};

module.exports = {
    createOne,
    updateOne,
    getOneById,
    getOneByEmail,
    getAll,
    deleteOne,
    deleteMany,
};
