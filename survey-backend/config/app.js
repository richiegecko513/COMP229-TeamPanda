/* eslint-disable no-undef */
let express = require('express');
    path = require('path');
    mongoose = require('mongoose');
    cors = require('cors');
    let logger = require('morgan');
    DB = require('./db')
    bodyParser = require('body-parser');
    createError = require('http-errors')

mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});

let surveyRouter = require('../routes/survey');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());


//routing
app.use('/api', surveyRouter);

//PORT
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error', { title: 'Error'});
});

module.exports = app;