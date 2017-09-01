const express = require('express');

const router = express.Router();

const { getQuestionsPaper } = require('../controllers/questionPaperController');

/* GET users listing. */
router.get('/questionpaper', getQuestionsPaper);

module.exports = router;
