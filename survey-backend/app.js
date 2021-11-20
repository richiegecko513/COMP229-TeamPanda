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
