const express = require('express');
const {
    createUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteOneUser,
    logIn,
} = require('../modules/user/controllers/user.controller');
const { userValidators, userValidationHandler } = require('../middlewares/userValidators');
const { loginValidators, loginValidationHandler } = require('../middlewares/loginValidators');

const router = express.Router();

router.route('/register').post(userValidators, userValidationHandler, createUser);
router.route('/login').post(loginValidators, loginValidationHandler, logIn);
router.route('/current-user');

router.route('/users').get(getAllUser);
router.route('/users/:id').get(getOneUser).patch(updateUser).delete(deleteOneUser);

module.exports = router;
