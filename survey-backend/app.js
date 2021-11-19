const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const credentials =  {
//     MONGO_USER: "TeamPanda",
//     MONGO_PASSWORD: "password",
//     MONGO_DB: "TeamPanda"
// };

// const mongoURL = `mongodb+srv://${credentials.MONGO_USER}:${credentials.MONGO_PASSWORD}@survey.eig9j.mongodb.net/${credentials.MONGO_DB}?retryWrites=true&w=majority`;
const mongoURL = "mongodb+srv://TeamPanda:<password>@survey.eig9j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

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
