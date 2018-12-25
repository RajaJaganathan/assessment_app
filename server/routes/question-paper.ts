import express from 'express';

import { requireLogin } from '../middleware/requireLogin';

const router = express.Router();

import {
  fetchQuestionsPaper,
  createQuestionPaper,
  fetchQuestionsByQuestionBank,
  deleteQuestionPaper,
  fetchQuestionByQP,
  createQuestionInQP
} from '../controllers/questionPaperController';

/* GET users listing. */
router.get('/questionpaper', requireLogin, fetchQuestionsPaper);
router.post('/questionpaper/create', createQuestionPaper);
router.post('/questionpaper/delete', deleteQuestionPaper);
router.get('/questionpaper/:questionPaperId/questions', fetchQuestionByQP);
router.post('/questionpaper/:questionPaperId/questions', createQuestionInQP);

export = router;
