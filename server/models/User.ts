import { IUserModel } from './../controllers/loginController';
import mongoose, { DocumentQuery, Document } from 'mongoose';

enum Role {
  superAdmin = 'superadmin',
  admin = 'admin',
  user = 'user'
}

export interface IUserModel extends Document {
  username: string,
  password: string,
  role: Role,
  created: Date
}

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

export default mongoose.model('User', userSchema);
