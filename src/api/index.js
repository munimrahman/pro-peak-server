const express = require("express");
const jobRoute = require("./jobs.routes");
const userRoute = require("./user.routes");

const router = express.Router();

router.use("/jobs", jobRoute);
router.use("/users", userRoute);

module.exports = router;
