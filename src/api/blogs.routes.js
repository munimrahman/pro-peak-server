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

/*
/blogs?author=64c24fb04aa8668e7eb7ed9a&tags=Node Js, PHP&searchQuery=react&page=1&limit=2
*/

router.route('/').post(createBlog).get(getAllBlog).delete(deleteManyBlog);
router.route('/:id').get(getOneBlog).put(updateBlog).delete(deleteOneBlog);

router.route('/:id/comments').post(createComment).put(createReply);

module.exports = router;
