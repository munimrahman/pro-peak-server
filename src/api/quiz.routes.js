const express = require('express');
const {
    createQuiz,
    updateQuiz,
    getOneQuiz,
    getAllQuiz,
    deleteOneQuiz,
    deleteManyQuiz,
} = require('../modules/quiz/controllers/quiz.controller');

const router = express.Router();

router.route('/').post(createQuiz).get(getAllQuiz).delete(deleteManyQuiz);
router.route('/:id').get(getOneQuiz).put(updateQuiz).delete(deleteOneQuiz);

module.exports = router;
