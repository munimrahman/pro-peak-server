const express = require('express');
const jobRoute = require('./jobs.routes');
const userRoute = require('./user.routes');
const companyRoute = require('./companies.routes');
const applicationsRoute = require('./applications.routes');

const router = express.Router();

router.use('/', userRoute);
router.use('/jobs', jobRoute);
router.use('/companies', companyRoute);
router.use('/job-applications', applicationsRoute);

module.exports = router;
