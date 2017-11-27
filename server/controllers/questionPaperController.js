const fs = require('fs');
const mongoose = require('mongoose');

const shuffle = require('lodash/shuffle');

const QuestionsModal = require('../models/Questions');
const QuestionPaper = require('../models/QuestionPaper');

exports.fetchQuestionsPaper = async function fetchQuestionsPaper(req, res) {  
  const questionPapers = await QuestionPaper.find({});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({ questionPapers});
  
  const fileContent = fs.readFileSync('../public/data/question-paper.json').toString();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.parse(fileContent));
};

exports.createQuestionPaper = async function createQuestionPaper(req, res) {
  console.log('object ::', req.body);
  const questionPaper = new QuestionPaper(req.body);
  const response = await questionPaper.save();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({ questionPaper: response });
};

exports.fetchQuestionsByQuestionBank = async function fetchQuestionsByQuestionBank(req, res) {
  const UserModel = mongoose.model('Questions');
  const questions = await QuestionsModal.find({});
  console.log('questions ', questions);
  res.status(200).json({
    questions
  });
};
