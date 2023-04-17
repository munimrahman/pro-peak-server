const express = require('express');
const { createUser } = require('../modules/user/controllers/user.controller');
const { userValidators, userValidationHandler } = require('../middlewares/userValidators');

const router = express.Router();

router.route('/').post(userValidators, userValidationHandler, createUser).get();

module.exports = router;
