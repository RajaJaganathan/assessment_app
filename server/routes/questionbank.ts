import express from 'express';

const router = express.Router();

import {
  fetchAllQuestionBanks,
  fetchQuestionsById,
  createQuestionInQuestionBank,
  createQuestionBank,
  deleteQuestionFromQB
} from '../controllers/questionBankController';

/* GET questionbank listing. */
router.get('/questionbanks', fetchAllQuestionBanks);
router.post('/questionbanks/create', createQuestionBank);
router.get('/questionbanks/:questionBankId/questions', fetchQuestionsById);
router.post('/questionbanks/:questionBankId/create', createQuestionInQuestionBank);
router.post('/questionbanks/:questionBankId/delete', deleteQuestionFromQB);

export = router;
