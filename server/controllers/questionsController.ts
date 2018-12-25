import fs from 'fs';

export function getQuestions(req, res, next) {
  const fileContent = fs.readFileSync('../public/data/questions.json').toString();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.parse(fileContent));
};

export function createQuestion(req, res, next) {
  console.log('createQuestion', req.body);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(req.body);
};

export function updateQuestion(req, res, next) {
  console.log('updateQuestion');
};

export function createQuestions(req, res, next) {
  console.log('deleteQuestion');
};
