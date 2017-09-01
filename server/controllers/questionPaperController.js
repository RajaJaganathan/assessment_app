const fs = require('fs');

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
