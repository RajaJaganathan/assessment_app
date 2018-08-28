const express = require('express');

const router = express.Router();

const {
  fetchQuestionsPaper,
  createQuestionPaper,
  fetchQuestionsByQuestionBank,
  deleteQuestionPaper,
  fetchQuestionByQP,
  createQuestionInQP
} = require('../controllers/questionPaperController');

/* GET users listing. */
router.get('/questionpaper', fetchQuestionsPaper);
router.post('/questionpaper/create', createQuestionPaper);
router.post('/questionpaper/delete', deleteQuestionPaper);
router.get('/questionpaper/:questionPaperId/questions', fetchQuestionByQP);
router.post('/questionpaper/:questionPaperId/questions', createQuestionInQP);

module.exports = router;
