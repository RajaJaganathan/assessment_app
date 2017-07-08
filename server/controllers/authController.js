exports.authenticate = (req, res, next) => {
  const isLogin = req.url.indexOf("login") > -1;
  if (isLogin) {
    next();
  } else if (req.session && req.session.authenticated) {
    next();
  } else {
    // Unauthorized user
    res.redirect("/login");
  }
};
