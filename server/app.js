const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stylus = require('stylus');
const mongoose = require('mongoose');
const env = require('dotenv').config();
const users = require('./routes/users');
const pools = require('./routes/pools');
const customerLogin = require('./routes/customerLogin');
const cors = require('cors');
const history = require('connect-history-api-fallback')

const app = express();
app.use(cors({
    origin: 'http://localhost:8080'
}));
const db = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

const Customer = require('./models/CustomerModel');
const Pool = require('./models/PoolModel');
const Prospect = require('./models/prospectModel');
const Spa = require('./models/SpaModel');

// const poolModel = mongoose.model('Pool', poolSchema);

const customerRouter = require('./routes/customers');
const customerLoginRouter = require('./routes/customerLogin');
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

const clientRoot = path.join(__dirname, '../client/dist');
app.use('/', express.static(clientRoot));
app.use(history('index.html', { root: clientRoot }));

module.exports = app;
