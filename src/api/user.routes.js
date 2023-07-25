const express = require('express');
const {
    createUser,
    getAllUser,
    getOneUser,
    updateUser,
    deleteOneUser,
    deleteManyUser,
    logIn,
} = require('../modules/user/controllers/user.controller');
const { userValidators, userValidationHandler } = require('../middlewares/userValidators');
const { loginValidators, loginValidationHandler } = require('../middlewares/loginValidators');

const router = express.Router();

router.route('/register').post(userValidators, userValidationHandler, createUser);
router.route('/log-in').post(loginValidators, loginValidationHandler, logIn);
// router.route('/current-user');

router.route('/users').get(getAllUser).delete(deleteManyUser);
router.route('/users/:id').get(getOneUser).put(updateUser).delete(deleteOneUser);

module.exports = router;
