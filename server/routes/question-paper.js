const express = require('express');

const router = express.Router();

const {
  fetchQuestionsPaper,
  createQuestionPaper,
  fetchQuestionsByQuestionBank,
} = require('../controllers/questionPaperController');

/* GET users listing. */
router.get('/questionpaper', fetchQuestionsPaper);
router.post('/questionpaper/new', createQuestionPaper);

module.exports = router;
