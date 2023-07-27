/* eslint-disable consistent-return */
const catchError = require('../../../utils/error/catchError');
const quizServices = require('../services');
const { HTTP_CREATED, HTTP_OK } = require('../../../utils/constants/constants');

const createQuiz = catchError(async (req, res, next) => {
    const data = await quizServices.createQuizService(req.body);
    res.status(HTTP_CREATED.code).json({
        success: true,
        message: HTTP_CREATED.message,
        data,
    });
});

const updateQuiz = catchError(async (req, res, next) => {
    const updatedQuiz = await quizServices.updateQuizService(req.body, req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Updated Successfully.',
        data: updatedQuiz,
    });
});

const getOneQuiz = catchError(async (req, res, next) => {
    const quiz = await quizServices.getOneQuizService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        quiz,
    });
});

// get all Quiz
const getAllQuiz = catchError(async (req, res, next) => {
    const data = await quizServices.getAllQuizService(req.query);
    res.status(HTTP_OK.code).json({
        success: true,
        message: HTTP_OK.message,
        data,
    });
});

const deleteOneQuiz = catchError(async (req, res, next) => {
    const response = await quizServices.deleteOneQuizService(req.params.id);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Quiz Deleted Successfully',
        deletedQuiz: response,
    });
});

const deleteManyQuiz = catchError(async (req, res, next) => {
    const response = await quizServices.deleteManyQuizService(req.body.ids);
    res.status(HTTP_OK.code).json({
        success: true,
        message: 'Quizzes Deleted Successfully',
        data: response,
    });
});

module.exports = {
    createQuiz,
    updateQuiz,
    getOneQuiz,
    getAllQuiz,
    deleteOneQuiz,
    deleteManyQuiz,
};
