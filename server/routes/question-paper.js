const express = require('express');

const router = express.Router();

const {
  getQuestionsPaper,
  createQuestionPaper,
  fetchQuestionsByQuestionBank,
} = require('../controllers/questionPaperController');

/* GET users listing. */
router.get('/questionpaper', getQuestionsPaper);
router.post('/questionpaper/new', createQuestionPaper);

module.exports = router;
