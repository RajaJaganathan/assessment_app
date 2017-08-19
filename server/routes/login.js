const express = require('express');
const router = express.Router();
const { login, logout, user } = require('../controllers/loginController');

router.post('/login', login);
router.get('/logout', logout);
router.get('/user', user);

module.exports = router;
