const express = require("express");
const path = require("path");
// const favicon = require("serve-favicon");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const session = require("express-session");

const mongoose = require("mongoose");

// const indexRoutes = require("./routes/index");
const questionsRoutes = require("./routes/questions");
const loginRoutes = require("./routes/login");

const authController = require("./controllers/authController");

const app = express();

// Populate environment variables from variable.env files
require("dotenv").config({
  path: "variable.env"
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// app.set('trust proxy', true);
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    name: "sessionId",
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 365 * 24 * 60 * 60 * 1000
    }
  })
);
// morgan to log the activity
app.use(logger("dev"));

// To server static assets which lived inside public folder
app.use(express.static(path.join(__dirname, "public")));

// Connect Database
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

//Registering all models here
require("./models/User");

mongoose.connection.on("connected", ref => {
  console.info(`connected ref`, ref);
  app.listen(process.env.PORT, function() {
    console.log(`Assessment Exam App listening on port ${process.env.PORT}`);
  });
});

mongoose.connection.on("error", err => {
  console.error(`error ${err}`);
});

// Application wide routes
app.use(authController.authenticate);

app.use("/api/v1", loginRoutes);
app.use("/api/v1", questionsRoutes);

// // catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
