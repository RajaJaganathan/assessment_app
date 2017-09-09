const fs = require('fs');
const mongoose = require('mongoose');

const shuffle = require('lodash/shuffle');

const QuestionsModal = require('../models/Questions');

exports.getQuestionsPaper = function(req, res) {
  const fileContent = fs
    .readFileSync('../public/data/question-paper.json')
    .toString();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.parse(fileContent));
};

exports.createQuestionPaper = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({ title: req.body.title, desc: req.body.desc });
};

exports.fetchQuestionsByQuestionBank = async function(req, res) {
  const UserModel = mongoose.model('Questions');
  const questions = await QuestionsModal.find({});
  console.log('questions ', questions);
  res.status(200).json({
    questions
  });
};
