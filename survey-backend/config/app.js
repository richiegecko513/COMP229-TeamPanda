/* eslint-disable no-undef */
let express = require('express');
let cors = require('cors');
let logger = require('morgan');
let cookieParser = require('cookie-parser');

//let bodyParser = require('body-parser');
//let createError = require('http-errors')
//let path = require('path');

//modules for authentication
let session = require('express-session');
let passport = require('passport');

let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');


//database set up 
let DB = require('./db')
let mongoose = require('mongoose');

mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.')
    } else {
      console.log('Error in DB connection: ' + err)
    }
});


let surveyRouter = require('../routes/survey');

const app = express();

/*
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
*/

app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());


//setup express session
app.use(session({
  secret:"SomeSecret",
  saveUninitialized: false,
  resave: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//create model instance
let userModel = require('../models/user');
let User = userModel.User;


passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = DB.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err, false);
    });
});

passport.use(strategy);


//routing
app.use('/api', surveyRouter);
app.get("*",(req, res)=>{

  res.sendFile(path.join(__dirname, '../../../public/index.html'))
});

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

/*
// catch 404 and forward to error handler
 app.use(function(req, res, next) {
   next(createError(404));
 });

// error handler
  app.use(function(err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   render the error page
   res.status(err.status || 500);
   res.render('error', { title: 'Error'});
 });
*/
module.exports = app;