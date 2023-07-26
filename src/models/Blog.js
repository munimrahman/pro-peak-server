const mongoose = require('mongoose');

const { Schema } = mongoose;

const replySchema = Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

const commentSchema = Schema({
    author: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    replies: [replySchema],
});

const blogSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            minLength: [10, 'Blog title must be at least 10 character'],
            maxLength: [200, 'Blog title is too long'],
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: [String],
            required: true,
        },
        featuredPhoto: {
            type: String,
            required: true,
        },
        coverPhoto: {
            type: String,
            required: true,
        },
        loves: {
            type: Number,
        },
        comments: [commentSchema],
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true }
);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
