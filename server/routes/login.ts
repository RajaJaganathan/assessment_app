import express from 'express';

const router = express.Router();
const { login, logout } = require('../controllers/loginController');

router.post('/login', login);
router.get('/logout', logout);

export default router;
