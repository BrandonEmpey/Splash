const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stylus = require('stylus');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const index = require('./routes/index');
const users = require('./routes/users');
const pools = require('./routes/pools');

const app = express();
const db = mongoose.connect('mongodb://localhost/Tropical');

const Customer = require('./models/customerModel');
const Pool = require('./models/poolModel');
const Prospect = require('./models/prospectModel');
const Spa = require('./models/spaModel');

// const poolModel = mongoose.model('Pool', poolSchema);

const customerRouter = require('./routes/customers');
const poolRouter = require('./routes/pools');
const prospectRouter = require('./routes/prospects');
const spaRouter = require('./routes/spas');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/api/pools', poolRouter);
app.use('/api/spas', spaRouter);
app.use('/api/customers', customerRouter);
app.use('/api/prospects', prospectRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('HA!');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
