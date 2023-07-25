const express = require('express');
const {
    createJobPost,
    updateJobPost,
    getOneJobPost,
    getAllJobPost,
    deleteOneJobPost,
    deleteManyJobPost,
} = require('../modules/job/controllers/job.controller');

const router = express.Router();

router.route('/').post(createJobPost).get(getAllJobPost).delete(deleteManyJobPost);
router.route('/:id').get(getOneJobPost).put(updateJobPost).delete(deleteOneJobPost);

module.exports = router;
