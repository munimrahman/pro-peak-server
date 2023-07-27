/* eslint-disable max-len */
const express = require('express');
const {
    createJobPost,
    updateJobPost,
    getOneJobPost,
    getAllJobPost,
    deleteOneJobPost,
    deleteManyJobPost,
} = require('../modules/jobPost/controllers/job.controller');

const router = express.Router();
/*
 jobs?location=Dhaka, Bangladesh&sortBy=salary&postDate=0&page=1&limit=20&industry= Desktop Development&salary=100-300&jobLevel=Entry Level, Junior Level&workPlace=Remote, On Site&jobType=Full Time, Part Time&tags=Node JS&searchQuery=nod&hiringManagerId=64bfd8d517a5da3a605ead68
*/

router.route('/').post(createJobPost).get(getAllJobPost).delete(deleteManyJobPost);
router.route('/:id').get(getOneJobPost).put(updateJobPost).delete(deleteOneJobPost);

module.exports = router;
