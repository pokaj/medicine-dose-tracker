const {check, validationResult} = require('express-validator');

exports.registrationValidator = [
    check('firstname').notEmpty().withMessage('Firstname is required'),
    check('lastname').notEmpty().withMessage('Lastname is required'),
    check('email').notEmpty().withMessage('Email is required'),
    check('phone').notEmpty().withMessage('Phone number is required'),
    check('age').notEmpty().withMessage('Age is required'),
    check('password').notEmpty().withMessage('Password is required')
];

exports.loginValidator = [
    check('email').notEmpty().withMessage('Email is required'),
    check('password').notEmpty().withMessage('Password is required'),
]

exports.isRequestValidated = (req, res, next) =>{
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({status: false, error: errors.array()[0].msg});
    }
    next();
}
