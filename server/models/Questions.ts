import mongoose from 'mongoose';

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

export = mongoose.model('Question', questionSchema);
