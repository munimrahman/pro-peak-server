const mongoose = require('mongoose');

const { Schema } = mongoose;

const quizSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minLength: [10, 'Title must be at least 10 characters'],
            maxLength: [50, 'Title is too long'],
        },
        times: {
            type: String,
            required: true,
        },
        totalQuestions: {
            type: String,
            required: true,
        },
        featuredPhoto: {
            type: String,
            required: true,
        },
        questions: [
            {
                question: { type: String, required: true },
                options: [
                    {
                        id: { type: String, required: true },
                        option: { type: String, required: true },
                        isCorrect: { type: String, required: true },
                    },
                ],
            },
        ],
    },
    { timestamps: true }
);

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
