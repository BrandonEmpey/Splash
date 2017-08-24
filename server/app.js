const env = require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const stylus = require('stylus');
const mongoose = require('mongoose');
const pools = require('./routes/pools');
const signup = require('./routes/signup');
const cors = require('cors');
const history = require('connect-history-api-fallback');
//const index = require('./routes/index');
const authRouter = require("./routes/auth");
const passport = require("passport");
const config = require("./config");
const { Strategy, ExtractJwt } = require("passport-jwt");

const app = express();
app.use(cors({
    origin: 'http://localhost:8080'
}));
console.log("process.env.MONGODB_URI", process.env.MONGODB_URI);
const db = mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true});

const Pool = require('./models/PoolModel');
const User = require('./models/user');
const Spa = require('./models/SpaModel');

// const poolModel = mongoose.model('Pool', poolSchema);

const poolRouter = require('./routes/pools');
const spaRouter = require('./routes/spas');
const signupRouter = require('./routes/signup');




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
// Create the strategy for JWT
const strategy = new Strategy(
	{
		// this is a config we pass to the strategy
		// it needs to secret to decrypt the payload of the
		// token.
		secretOrKey: config.jwtSecret,
		// This options tells the strategy to extract the token
		// from the header of the request
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	},
	(payload, done) => {
		// payload is the object we encrypted at the route /api/token
		// We get the user id, make sure the user exist by looking it up
		User.findById(payload.id).then(user => {
			if (user) {
				// make the user accessible in req.user
				done(null, user);
			} else {
				done(new Error("User not found"));
			}
		});
	}
);
// tell pasport to use it
passport.use(strategy);

app.use('/api/pools', poolRouter);
app.use('/api/spas', spaRouter);
// app.use('/api/signup', signupRouter);
app.use('/api', authRouter);
//app.use('/', index);

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

