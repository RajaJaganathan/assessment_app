import mongoose, { DocumentQuery, Document } from 'mongoose';
import { Request, Response } from 'express';

type Role = 'superadmin' | 'admin' | 'user';

export interface IUserModel extends Document {
  username: string,
  password: string,
  role: Role,
  created: Date
}

export async function login(req: Request, res: Response, next: Function) {
  const { username, password } = req.body;
  const UserModel = mongoose.model('User');

  const user = await UserModel.findOne({ username, password });
  
  if (user) {
    req.session.authenticated = true;
    req.session.user = user;
    res.status(200).json({
      code: 200,
      message: 'authentication successfully',
      description: 'authentication successfully',
      user
    });
  } else {
    res.status(401).json({
      code: 200,
      message: 'authentication failed',
      description: 'authentication failed'
    });
  }
};

export function logout(req, res, next) {
  delete req.session.authenticated;
  delete req.session.user;

  req.session.destroy(() => {
    res.clearCookie('sessionId', { path: '/' }); // see comments above
    res.status(200).send({ message: 'Logout successfully.' });
  });
};
