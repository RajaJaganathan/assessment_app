const mongoose = require('mongoose');

const questionPaperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  questionIds: [String],
  published: Date,
  version: Number,
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('QuestionPaper', questionPaperSchema);
