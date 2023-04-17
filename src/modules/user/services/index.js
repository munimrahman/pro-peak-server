const userRepository = require('../repository');

const createUserService = async (data) => {
    const user = await userRepository.createOne(data);
    return user;
};

const updateUserService = async () => {};

const getOneUserService = async () => {};

const getAllUserService = async () => {};

const deleteOneUserService = async () => {};

const deleteManyUserService = async () => {};

module.exports = {
    createUserService,
    updateUserService,
    getOneUserService,
    getAllUserService,
    deleteOneUserService,
    deleteManyUserService,
};
