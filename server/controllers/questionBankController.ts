import QuestionBankModal = require('../models/QuestionBank');
import QuestionModal = require('../models/Questions');

export async function fetchAllQuestionBanks(req, res) {
  const questionBanks = await QuestionBankModal.find({});
  res.status(200).json({
    questionBanks,
  });
};

export async function fetchQuestionsById(req, res) {
  const questionBank:any = await QuestionBankModal.findOne({
    _id: req.params.questionBankId,
  });

  const questions = await QuestionModal.find({
    _id: { $in: questionBank.questionIds },
  });

  res.status(200).json({
    questions,
  });
};

export async function createQuestionInQuestionBank(req, res) {
  console.log('req.body ', req.body);
  const questionModal = new QuestionModal(req.body);
  const question = await questionModal.save();
  console.log('questions created successfully ', question);
  const questionBank = await QuestionBankModal.findOneAndUpdate(
    { _id: req.params.questionBankId },
    { $push: { questionIds: question._id } },
    { upsert: true }); // safe: true,
  res.status(200).json({
    question,
  });
};

export async function createQuestionBank(req, res) {
  console.log('req.body ', req.body);
  const questionBankModal = new QuestionBankModal(req.body);
  const qbModal = await questionBankModal.save();
  console.log('question bank created successfully ', qbModal);

  res.status(200).json({
    questionBank: qbModal
  });
};

export async function deleteQuestionFromQB(req, res) {
  const { questionBankId, question } = req.body;
  const questionBank = await QuestionBankModal.findOneAndUpdate(
    { _id: questionBankId },
    { $pull: { questionIds: question._id } },
    { upsert: true }); // safe: true,

  res.status(200).json({
    questionBank
  });
};

