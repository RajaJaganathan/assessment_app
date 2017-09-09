const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
  },
  options: [
    {
      text: String,
      answer: Boolean,
    },
  ],
  tags: [
    {
      type: { type: String },
      name: String,
    },
  ],
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Question', questionSchema);
