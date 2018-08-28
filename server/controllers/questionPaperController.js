const fs = require('fs');
const mongoose = require('mongoose');

const shuffle = require('lodash/shuffle');

const QuestionModal = require('../models/Questions');
const QuestionPaper = require('../models/QuestionPaper');

exports.fetchQuestionsPaper = async function fetchQuestionsPaper(req, res) {
  const questionPapers = await QuestionPaper.find({});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({ questionPapers });

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
  const questions = await QuestionModal.find({});
  console.log('questions ', questions);
  res.status(200).json({
    questions
  });
};

exports.deleteQuestionPaper = async function deleteQuestionPaper(req, res) {
  const questionPaper = await QuestionPaper.findOneAndDelete({
    _id: req.body.questionPaperId
  });
  console.log('questionPaper ', questionPaper);
  res.status(200).json({
    questionPaper
  });
};

exports.fetchQuestionByQP = async function fetchQuestionByQP(req, res) {
  const questionPaper = await QuestionPaper.findOne({
    _id: req.params.questionPaperId,
  });

  const questions = await QuestionModal.find({
    _id: { $in: questionPaper.questionIds },
  });

  res.status(200).json({
    questions,
  });
};

exports.createQuestionInQP = async function createQuestionInQP(req, res) {
  console.log('req.body ', req.body);
  // const questionModal = new QuestionModal(req.body);
  // const question = await questionModal.save();
  // console.log('questions created successfully ', question);
  const questionPaperId = req.params;
  const questionPaper = await QuestionPaper.findOneAndUpdate(
    { _id: questionPaperId },
    { $push: { questionIds: req.body.questionId } },
    { safe: true, upsert: true });
  const response = await questionPaper.save();
  const question = {};
  res.status(200).json({
    question,
  });
};
