const express = require("express");
const { createUser } = require("../modules/user/controllers/user.controller");
const {
  userValidators,
  userValidationHandler,
} = require("../middlewares/userValidators");
const router = express.Router();

router.post("/sign-up", userValidators, userValidationHandler, createUser);

router.get("/", (req, res) => {
  res.send("From Users Router");
});

module.exports = router;
