/* eslint-disable object-curly-newline */
/* eslint-disable radix */
const quizRepository = require('../repository');

const createQuizService = async (data) => {
    const quiz = await quizRepository.createOne(data);
    return quiz;
};

const updateQuizService = async (data, id) => {
    const updatedQuiz = await quizRepository.updateOne(data, id);
    return updatedQuiz;
};

const getOneQuizService = async (id) => {
    const quiz = await quizRepository.getOneById(id);
    return quiz;
};

// TODO: get all companies
const getAllQuizService = async (query) => {
    const { searchQuery, page = 1, limit = 5 } = query;
    const queries = {};
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

    const data = await quizRepository.getAll(queries);
    return data;
};

const deleteOneQuizService = async (id) => {
    const res = await quizRepository.deleteOne(id);
    return res;
};

const deleteManyQuizService = async (ids) => {
    const res = await quizRepository.deleteMany(ids);
    return res;
};

module.exports = {
    createQuizService,
    updateQuizService,
    getOneQuizService,
    getAllQuizService,
    deleteOneQuizService,
    deleteManyQuizService,
};
