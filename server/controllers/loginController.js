const mongoose = require("mongoose");

exports.login = (req, res, next) => {
  const { username, password } = req.body;
  const User = mongoose.model("User");

  User.find({ username, password }).then(docs => {
    if (docs.length) {
      req.session.authenticated = true;
      req.session.user = { username: req.body.username };
      res.status(200).json({
        code: 200,
        message: "Authentication successfully",
        description: "Authentication successfully"
      });
    } else {
      res.status(401).json({
        code: 200,
        message: "Authentication failed",
        description: "Authentication failed"
      });
    }
  });
};

exports.logout = (req, res, next) => {
  delete req.session.authenticated;
  delete req.session.user;

  req.session.destroy(() => {
    res.clearCookie("sessionId", { path: "/" }); // see comments above
    res.status(200).send({ message: "Logout successfully." });
  });
};

exports.user = (req, res) => {
  res.status(200).json(req.session.user);
};
