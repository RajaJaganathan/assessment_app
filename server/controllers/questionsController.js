const fs = require('fs');

exports.getQuestions = function(req, res, next) {
  const fileContent = fs
    .readFileSync('../public/data/questions.json')
    .toString();
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(JSON.parse(fileContent));
};
