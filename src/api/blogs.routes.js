const express = require('express');
const {
    createBlog,
    updateBlog,
    createComment,
    createReply,
    getOneBlog,
    getAllBlog,
    deleteOneBlog,
    deleteManyBlog,
} = require('../modules/blog/controllers/blogs.controller');

const router = express.Router();

router.route('/').post(createBlog).get(getAllBlog).delete(deleteManyBlog);
router.route('/:id').get(getOneBlog).put(updateBlog).delete(deleteOneBlog);

router.route('/:id/comments').post(createComment).put(createReply);

module.exports = router;
