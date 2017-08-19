module.exports = (req, res, next) => {
  if (!req.session.authenticated) {
    return res.status(401).json({ error: 'You must log in!' });
  }
  next();
};
