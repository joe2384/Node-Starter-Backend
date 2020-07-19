const router = require('express').Router();
const { signUpUser } = require('../queries/signup.js');

router.post('/', signUpUser);

module.exports = router;
