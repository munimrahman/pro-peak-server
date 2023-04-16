const express = require("express");
const jobRoute = require("./jobs.routes");

const router = express.Router();

router.use("/jobs", jobRoute);

module.exports = router;
