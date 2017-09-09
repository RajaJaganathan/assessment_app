const fs = require('fs');

exports.getQuestions = function getQuestions(req, res, next) {
  const fileContent = fs
    .readFileSync('../public/data/questions.json')
    .toString();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.parse(fileContent));
};

exports.createQuestion = function createQuestion(req, res, next) {
  console.log('createQuestion', req.body);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(req.body);
};

exports.updateQuestion = function updateQuestion(req, res, next) {
  console.log('updateQuestion');
};

exports.deleteQuestion = function createQuestions(req, res, next) {
  console.log('deleteQuestion');
};
