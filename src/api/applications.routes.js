const express = require('express');
const {
    createJobApplication,
    updateJobApplication,
    getOneJobApplication,
    getAllJobApplication,
    deleteOneJobApplication,
    deleteManyJobApplication,
} = require('../modules/jobApplication/controllers/jobApply.controller');

const router = express.Router();

router
    .route('/')
    .post(createJobApplication)
    .get(getAllJobApplication)
    .delete(deleteManyJobApplication);
router
    .route('/:id')
    .get(getOneJobApplication)
    .put(updateJobApplication)
    .delete(deleteOneJobApplication);

module.exports = router;
