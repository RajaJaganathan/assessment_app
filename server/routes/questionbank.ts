import express from 'express';

const router = express.Router();

const {
  fetchAllQuestionBanks,
  fetchQuestionsById,
  createQuestionInQuestionBank,
  createQuestionBank,
  deleteQuestionFromQB
} = require('../controllers/questionBankController');

/* GET questionbank listing. */
router.get('/questionbanks', fetchAllQuestionBanks);
router.post('/questionbanks/create', createQuestionBank);
router.get('/questionbanks/:questionBankId/questions', fetchQuestionsById);
router.post('/questionbanks/:questionBankId/create', createQuestionInQuestionBank);
router.post('/questionbanks/:questionBankId/delete', deleteQuestionFromQB);

export default router;
