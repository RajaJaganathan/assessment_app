import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['superadmin', 'admin', 'user'],
    default: 'user'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

export = mongoose.model('User', userSchema);
