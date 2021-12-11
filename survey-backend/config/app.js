/* eslint-disable no-undef */
let express = require('express');
    path = require('path');
    mongoose = require('mongoose');
    cors = require('cors');
    let logger = require('morgan');
    DB = require('./db')
    bodyParser = require('body-parser');
    createError = require('http-errors')


//modules for authentication
let session = require('express-session');
let passport = require('passport');

let passportJWT = require('passport-jwt');
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT = passportJWT.ExtractJwt;

let passportLocal = require('passport-local');
let localStrategy = passportLocal.Strategy;
let flash = require('connect-flash');



mongoose.connect(DB.URI, 
  {useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.')
  } else {
      console.log('Error in DB connection: ' + err)
  }
  }
  );

// let mongoDB = mongoose.connection;
// mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
// mongoDB.once('open', ()=>{
//   console.log('Connected to MongoDB...');
// });

let surveyRouter = require('../routes/survey');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());


//setup express session
app.use(session({
  secret:"SomeSecret",
  saveUninitialized: false,
  resave: false
}))

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


//create model instance
let userModel = require('../models/user');
let User = userModel.User;


passport.use(User.createStrategy())

app.use(passport.initialize());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


let jwtOptions ={ secret:"SomeSecret"};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();

jwtOptions.secretOrKey = "SomeSecret";


let strategy = new JWTStrategy(jwtOptions,(jwt_payload, done)=>{
  User.findById(jwt_payload.id).then(user=>{
    return done(null,user)
  })
  .catch(err=>{
    return done(err, false)
  });
});

passport.use(strategy);


//routing
app.use('/api', surveyRouter);

//PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
//   res.status(err.status || 500);
//   res.render('error', { title: 'Error'});
// });

module.exports = app;