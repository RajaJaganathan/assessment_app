import { Request, Response } from "express-serve-static-core";

export function requireLogin(req: Request, res: Response, next) {
  if (!req.session.authenticated) {
    return res.status(401).json({ error: 'You must log in!' });
  }

  next();
};
