import express from 'express';

const router = express.Router();
const { getQuestions } = require('../controllers/questionsController');

/* GET users listing. */
router.get('/questions', getQuestions);

export default router;
