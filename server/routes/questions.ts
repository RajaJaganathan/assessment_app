import express from 'express';
import { getQuestions } from '../controllers/questionsController';

const router = express.Router();

/* GET users listing. */
router.get('/questions', getQuestions);

export = router;
