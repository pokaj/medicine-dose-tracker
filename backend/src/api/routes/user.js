const express = require('express')
const router = express.Router();
const {signup, login} = require('../controllers/user');
const {registrationValidator, loginValidator, isRequestValidated} = require('../middleware/validators');

router.post('/signup', registrationValidator, isRequestValidated, signup);
router.post('/login', loginValidator, isRequestValidated, login);

module.exports = router;