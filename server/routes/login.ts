import express from 'express';
import { login, logout } from '../controllers/loginController';

const router = express.Router();

router.post('/login', login);
router.get('/logout', logout);

export = router;
