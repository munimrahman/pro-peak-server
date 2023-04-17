const User = require('../../../models/User');

const createOne = async (data) => {
    const user = await User.create(data);
    return user;
};

const updateOne = async (data, id) => {};

const getOne = async (id) => {};

const getAll = async () => {};

const deleteOne = async (id) => {};

const deleteMany = async (ids) => {};

module.exports = {
    createOne,
    updateOne,
    getOne,
    getAll,
    deleteOne,
    deleteMany,
};
