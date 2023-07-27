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
/*
/job-applications?candidateId=64c24fb04aa8668e7eb7ed9a&page=1&limit=1
*/
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
