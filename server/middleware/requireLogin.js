module.exports = (req, res, next) => {
  if (!req.session.authenticated) {
    console.log('Must log !!!');
    return res.status(401).json({ error: 'You must log in!' });
  }
  console.log('Authenticated !!!');
  next();
};
