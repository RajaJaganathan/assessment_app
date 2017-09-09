const mongoose = require('mongoose');

const questionBankSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  questionIds: [String],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('QuestionBank', questionBankSchema);
