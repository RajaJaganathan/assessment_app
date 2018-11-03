import fs from 'fs';
import mongoose from 'mongoose';

const shuffle = require('lodash/shuffle');

const QuestionModal = require('../models/Questions');
const QuestionPaper = require('../models/QuestionPaper');

export async function fetchQuestionsPaper(req, res) {
  const questionPapers = await QuestionPaper.find({});
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({ questionPapers });

  const fileContent = fs.readFileSync('../public/data/question-paper.json').toString();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.parse(fileContent));
};

export async function createQuestionPaper(req, res) {
  console.log('object ::', req.body);
  const questionPaper = new QuestionPaper(req.body);
  const response = await questionPaper.save();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send({ questionPaper: response });
};

export async function fetchQuestionsByQuestionBank(req, res) {
  const UserModel = mongoose.model('Questions');
  const questions = await QuestionModal.find({});
  console.log('questions ', questions);
  res.status(200).json({
    questions
  });
};

export async function deleteQuestionPaper(req, res) {
  // @ts-ignore
  const questionPaper = await QuestionPaper.findOneAndDelete({
    _id: req.body.questionPaperId
  });
  console.log('questionPaper ', questionPaper);
  res.status(200).json({
    questionPaper
  });
};

export async function fetchQuestionByQP(req, res) {
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

export async function createQuestionInQP(req, res) {
  console.log('req.body ', req.body);
  // const questionModal = new QuestionModal(req.body);
  // const question = await questionModal.save();
  // console.log('questions created successfully ', question);
  const questionPaperId = req.params;
  const questionPaper = await QuestionPaper.findOneAndUpdate(
    { _id: questionPaperId },
    { $push: { questionIds: req.body.questionId } },
    { upsert: true }); // safe: true,
  const response = await questionPaper.save();
  const question = {};
  res.status(200).json({
    question,
  });
};
