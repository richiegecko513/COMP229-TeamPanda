/* eslint-disable no-undef */
let express = require('express');
    path = require('path');
    mongoose = require('mongoose');
    cors = require('cors');
    bodyParser = require('body-parser');
    mongoDb = require('./database/db');
    createError = require('http-errors')

    const mongoURL = "mongodb+srv://TeamPanda:ql3lbQ8dGnrvHtkg@survey.eig9j.mongodb.net/Survey?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('connected to database!');
      app.listen(3000);
    })
    .catch(error => {
      console.log('connection failed! with ' + error);
    });
const surveyRoute = require('./routes/survey')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

//static directory path
app.use('/api', surveyRoute)

//PORT
const port = process.env.PORT || 3500;

app.listen(port, () => {
  console.log('Listening on port ' + port)
})

//404
app.use((req, res, next) => {
  next(createError(404));
});

//Base Route
app.get('/', (req, res) => {
  res.send('invalid endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/user/index.html'));
});

//error handlers
app.use(function (err, req, res, next) {
  console.error(err.message);
  if(!err.statuscode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
})
/*
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/*
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const credentials =  {
    MONGO_USER: "TeamPanda",
    MONGO_PASSWORD: "ql3lbQ8dGnrvHtkg",
    MONGO_DB: "Survey"
};

const mongoURL = `mongodb+srv://${credentials.MONGO_USER}:${credentials.MONGO_PASSWORD}@survey.eig9j.mongodb.net/${credentials.MONGO_DB}?retryWrites=true&w=majority`;
// const mongoURL = "mongodb+srv://TeamPanda:ql3lbQ8dGnrvHtkg@survey.eig9j.mongodb.net/Survey?retryWrites=true&w=majority";

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('connected to database!');
      app.listen(3000);
    })
    .catch(error => {
      console.log('connection failed! with ' + error);
    });

app.use(bodyParser.json());

app.get('/',(req, res, next) => {
  res.send('Hello there...!');
});
*/