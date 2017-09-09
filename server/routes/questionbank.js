const express = require('express');

const router = express.Router();

const {
  fetchAllQuestionBanks,
  fetchQuestionsById,
  createQuestionInQuestionBank
} = require('../controllers/questionBankController');

/* GET questionbank listing. */
router.get('/questionbanks', fetchAllQuestionBanks);
router.get('/questionbanks/:questionBankId/questions', fetchQuestionsById);
router.post('/questionbanks/:questionBankId/create', createQuestionInQuestionBank);

module.exports = router;
