const mongoose = require('mongoose');

exports.user = (req, res) => {
  res.status(200).json(req.session.user);
};
