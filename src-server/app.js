const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const passport = require('passport');
const DB = require('./db.js');
const apiBooks = require('./routes/api/books');
const apiClasses = require('./routes/api/classes');
const apiChapters = require('./routes/api/chapters');

const apiBookPoints = require('./routes/api/bookPoints');
const apiClassPoints = require('./routes/api/classPoints');
const apiBookDone = require('./routes/api/bookDone');
const apiClassDone = require('./routes/api/classDone');

const apiResources = require('./routes/api/resources');
const apiClassUsers = require('./routes/api/classUsers');
const apiUsers = require('./routes/api/users');
const apiAuth = require('./routes/auth');

module.exports = async () => {
  const app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const { db } = await DB();
  app.set('db', db);

  app.use((req, res, next) => {
    if (req.path.indexOf('resources') > -1
    && req.path.indexOf('jsx') > -1) {
      res.status(401).json({ message: 'Unauthorized' });
    } else next();
  });

  app.use(express.static(path.join(__dirname, '../public')));

  // Enable CORS
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

  passport.use(require('./components/auth/local')(app));
  passport.use(require('./components/auth/jwt')(app));

  app.use('/auth', apiAuth(app));
  app.use('/api', apiBooks(app));
  app.use('/api', apiClasses(app));
  app.use('/api', apiChapters(app));
  app.use('/api', apiBookPoints(app));
  app.use('/api', apiClassPoints(app));
  app.use('/api', apiBookDone(app));
  app.use('/api', apiClassDone(app));
  app.use('/api', apiResources(app));
  app.use('/api', apiClassUsers(app));
  app.use('/api', apiUsers(app));

  app.use('*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

  // catch 404 and forward to error handler
  app.use((req, res, next) => {
    next(createError(404));
  });

  // error handler
  app.use((err, req, res) => {
    // send the error response
    res.status(err.status || 500);
    if (err.status === 401) res.send('<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=/auth"></head></html>');
    else res.send(err.message);
  });

  return app;
};
