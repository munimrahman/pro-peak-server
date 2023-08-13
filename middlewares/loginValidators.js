const { check, validationResult } = require('express-validator');

const loginValidators = [
    check('email').isEmail().withMessage('Invalid Email or Password'),
    check('password').isLength({ min: 6 }).withMessage('Invalid Email or Password'),
];

const loginValidationHandler = (req, res, next) => {
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();
    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        res.status(401).json({
            errors: mappedErrors,
        });
    }
};

module.exports = { loginValidators, loginValidationHandler };
