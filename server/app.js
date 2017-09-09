const express = require('express');
const path = require('path');
// const favicon = require("serve-favicon");
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');

// Middleware
const requireLogin = require('./middleware/requireLogin');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

// Routes
const questionsRoutes = require('./routes/questions');
const questionBankRoutes = require('./routes/questionbank');
const questionPapersRoutes = require('./routes/question-paper');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/user');

const app = express();

// Populate environment variables from variable.env files
require('dotenv').config({
  path: 'variable.env',
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.set('trust proxy', true);
// app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    name: 'sessionId',
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: false,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  })
);
// morgan to log the activity
app.use(logger('dev'));

// To server static assets which lived inside public folder
app.use(express.static(path.join(__dirname, 'public')));

// Connect Database
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;

// Registering all models here
require('./models/User');

mongoose.connection.on('connected', ref => {
  app.listen(process.env.PORT, () => {
    console.log(`Assessment listening on port ${process.env.PORT}`);
  });
});

mongoose.connection.on('error', err => {
  console.error(`mongoose error ${err}`);
});

// Application wide routes
app.use('/api/v1', loginRoutes);
app.use('/api/v1', requireLogin, userRoutes);
app.use('/api/v1', requireLogin, questionsRoutes);
app.use('/api/v1', requireLogin, questionPapersRoutes);
app.use('/api/v1', questionBankRoutes);

// Setup other middleware
// catch 404 and forward to error handler
app.use(notFound);
// error handler
app.use(errorHandler);

module.exports = app;
