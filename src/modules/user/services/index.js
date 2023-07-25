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
    const updatedUSer = await userRepository.updateOne(data, id);
    return updatedUSer;
};

const getOneUserService = async (id) => {
    const user = await userRepository.getOneById(id);
    return user;
};

const getAllUserService = async () => {
    const data = await userRepository.getAll();
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
