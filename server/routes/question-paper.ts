import express from 'express';

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
router.get('/questionpaper', fetchQuestionsPaper);
router.post('/questionpaper/create', createQuestionPaper);
router.post('/questionpaper/delete', deleteQuestionPaper);
router.get('/questionpaper/:questionPaperId/questions', fetchQuestionByQP);
router.post('/questionpaper/:questionPaperId/questions', createQuestionInQP);

export = router;
