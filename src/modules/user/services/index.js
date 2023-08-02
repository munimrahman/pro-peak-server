/* eslint-disable radix */
/* eslint-disable object-curly-newline */
const generateToken = require('../../../utils/helpers/generateToken');
const userRepository = require('../repository');

const registerUserService = async (data) => {
    const user = await userRepository.createOne(data);

    const confirmationToken = user.generateConfirmationToken();
    await user.save({ validateBeforeSave: true });
    // TODO: send confirmation mail

    const token = generateToken(user);
    // TODO: setup accessToken & refresh token in cookies

    return { user, token };
};

const loginUserService = async (data) => {
    const { email, password } = data;

    const user = await userRepository.getOneByEmail(email);

    if (!user) return undefined;

    const isPasswordMatch = user.comparePassword(password, user.password);

    if (!isPasswordMatch) return undefined;

    const token = generateToken(user);
    // TODO: setup accessToken & refresh token in cookies
    return { user, token };
};

const updateUserService = async (data, id) => {
    const updatedUser = await userRepository.updateOne(data, id);
    return updatedUser;
};

const getOneUserService = async (id) => {
    const user = await userRepository.getOneById(id);
    return user;
};

// get all users
const getAllUserService = async (query) => {
    const { role, skills, hourlyRate, certification, searchQuery, page = 1, limit = 5 } = query;
    const queries = { role, skills, hourlyRate, certification };

    // set pagination
    if (page) {
        const skip = (page - 1) * parseInt(limit);
        queries.skip = skip;
        queries.limit = parseInt(limit);
    }

    // set search query
    if (searchQuery) {
        const regex = new RegExp(searchQuery, 'i');
        queries.searchQuery = regex;
    }

    const data = await userRepository.getAll(queries);
    return data;
};

const deleteOneUserService = async (id) => {
    const res = await userRepository.deleteOne(id);
    return res;
};

const deleteManyUserService = async (ids) => {
    const res = await userRepository.deleteMany(ids);
    return res;
};

module.exports = {
    registerUserService,
    loginUserService,
    updateUserService,
    getOneUserService,
    getAllUserService,
    deleteOneUserService,
    deleteManyUserService,
};
