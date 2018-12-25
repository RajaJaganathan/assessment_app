import mongoose from 'mongoose';

const questionBankSchema = new mongoose.Schema({
  title: {
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

export = mongoose.model('QuestionBank', questionBankSchema);
