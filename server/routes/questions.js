const express = require('express');
const router = express.Router();
const util = require('util');
const {getQuestions} = require('../controllers/questionsController');

/* GET users listing. */
router.get('/questions', getQuestions);

module.exports = router;
