const fs = require('fs');
const mongoose = require('mongoose');

const shuffle = require('lodash/shuffle');

const QuestionBankModal = require('../models/QuestionBank');
const QuestionModal = require('../models/Questions');

exports.fetchAllQuestionBanks = async function(req, res) {
  const questionBanks = await QuestionBankModal.find({});
  res.status(200).json({
    questionBanks,
  });
};

exports.fetchQuestionsById = async function(req, res) {
  const questionBank = await QuestionBankModal.findOne({
    _id: req.params.questionBankId,
  });

  const questions = await QuestionModal.find({
    _id: { $in: questionBank.questionIds },
  });

  res.status(200).json({
    questions,
  });
};

exports.createQuestionInQuestionBank = async function(req, res) {
  console.log('req.body ', req.body);
  const questionModal = new QuestionModal(req.body);
  const question = await questionModal.save();
  console.log('questions created successfully ', question);
  const questionBankId = req.params;
  const questionBank = await QuestionBankModal.findOneAndUpdate(
    {_id: req.params.questionBankId},
    { $push: { questionIds: question._id } },
    { safe: true, upsert: true });
  const response = await questionBank.save();
  res.status(200).json({
    question,
  });
};
