/* eslint-disable operator-linebreak */
/* eslint-disable radix */
/* eslint-disable object-curly-newline */
const generateToken = require('../../../utils/helpers/generateToken');
const userRepository = require('../repository');
const cloudinary = require('../../../config/cloudinaryConfig');

const registerUserService = async (data) => {
    const { companyName, ...userData } = data;

    const user = await userRepository.createOne({ companyName, userData });

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

const updateUserService = async (body, file, id) => {
    const {
        name,
        mobile,
        coverPhoto,
        bio,
        designation,
        experience,
        language,
        facebook,
        linkedin,
        twitter,
        github,
        website,
        resume,
        address,
        skills,
        hourlyRate,
        workExperience,
    } = body;

    const data = {
        name,
        mobile,
        coverPhoto,
        bio,
        designation,
        experience,
        website,
        resume,
        address,
        hourlyRate,
        socialMedia: {},
        workExperience: {},
    };

    if (facebook) data.socialMedia.facebook = facebook;
    if (linkedin) data.socialMedia.linkedin = linkedin;
    if (twitter) data.socialMedia.twitter = twitter;
    if (github) data.socialMedia.github = github;
    if (language) data.language = [...body.language.split(',').map((l) => l.trim())];
    if (skills) data.skills = [...body.skills.split(',').map((l) => l.trim())];
    if (workExperience) {
        const {
            designation: role,
            companyName,
            companyLocation,
            start,
            end,
            description,
            jobType,
        } = JSON.parse(workExperience);
        const workExp = {
            designation: role,
            companyName,
            companyLocation,
            jobType,
            jobTime: { start, end },
            description,
        };
        data.workExperience = workExp;
    }

    // store image in cloudinary
    if (file?.path) {
        const result = await cloudinary.uploader.upload(file.path);
        const imageUrl = result.secure_url;
        data.profilePhoto = imageUrl;
    }

    if (workExperience) {
        const updatedUser = await userRepository.addWorkExperience(data.workExperience, id);
        return updatedUser;
    }
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
