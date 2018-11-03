import express from 'express';

const router = express.Router();

const { user } = require('../controllers/userController');

router.get('/user', user);

export default router;
