/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const app = express();

const surveyRoute = express.Router();
let Survey = require('../models/survey');

//Create a Survey
surveyRoute.route('/create-survey').post((req, res, next) => {
    Survey.create(req.body, (err, survey) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json(survey)
        }
    })
});

//get survey list
surveyRoute.route('/survey-list').get((req, res) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json(surveyList)
        }
    })
});

//get individual survey

surveyRoute.route('/take-survey/:id').get((req, res)=> {
    Survey.findById(req.params.id, (err, survey) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.json(survey)
        }
    })
});

//update survey
surveyRoute.route('/update/:id').put((req, res, next) => {
    Survey.findbyIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, survey) =>{
        if(err) 
        {
            return next(err),
            console.log(err)
        }
        else
        {
            res.json(survey)
            console.log('Survey updated successfully')
        }
    })
})

//Delete survey 
surveyRoute.route('/delete/:id').delete((req, res, next) => {
    Survey.findByIdAndRemove(req.params.id, (err, survey) => {
        if(err)
        {
            console.log(err)
        }
        else
        {
            res.status(200).json({
                msg: survey
            })
        }
    })
})

module.exportss = surveyRoute;