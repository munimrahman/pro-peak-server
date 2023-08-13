/* eslint-disable func-names */
const { check, validationResult } = require('express-validator');
const CustomError = require('../utils/error/customError');
const { HTTP_INTERNAL_SERVER_ERROR, HTTP_BAD_REQUEST } = require('../utils/constants/constants');
const User = require('../models/User');

const userValidators = [
    check('name')
        .isLength({ min: 6 })
        .withMessage('Name Must be at least 6 characters')
        .isAlpha('en-US', { ignore: ' -' })
        .withMessage('Name must not contain anything other than alphabet')
        .trim(),

    check('email')
        .isEmail()
        .withMessage('Invalid Email Address')
        .trim()
        .custom(async (value) => {
            try {
                const existingUser = undefined;
                //   const existingUser = await Users.findUserByEmail(value);
                if (existingUser) {
                    throw new Error('E-mail already in use');
                }
            } catch (error) {
                throw new CustomError(
                    HTTP_INTERNAL_SERVER_ERROR.code,
                    HTTP_INTERNAL_SERVER_ERROR.message
                );
            }
        }),

    check('password')
        .isStrongPassword({
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers: 1,
            minSymbols: 1,
        })
        .withMessage(
            'Password must be at least 6 characters with at least one uppercase letter, one lowercase letter, one number, one symbol'
        ),
];

const userValidationHandler = function (req, res, next) {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        // response the errors
        res.status(HTTP_BAD_REQUEST.code).json({
            errors: mappedErrors,
        });
    }
};

module.exports = { userValidators, userValidationHandler };
