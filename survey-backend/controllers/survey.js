const Survey = require('../models/survey');

//create survey
module.exports.createSurvey = (req, res) => {
    let newSurvey = Survey ({
        "title": req.body.title,
        "lifetime": req.body.lifetime,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3,
        "q4": req.body.q4,
        "q5": req.body.q5,
        "q6": req.body.q6,
        "q7": req.body.q7,
        "q8": req.body.q8,
        "q9": req.body.q9,
        "q10": req.body.q10
    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Sucessfully created new survey'});
        }
    });
};

//display create page
module.exports.displayCreatePage = (req, res) => {
    res.json({success: true, msg: "Successfully displayed create page"})
}

//get all surveys 
exports.getSurveys = (req, res) => {
    Survey.find((err, surveyList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.json(surveyList);
        }
    })
};

//get individual survey with id
exports.displaySurvey = (req, res) => {
    let id = req.params.id

    Survey.findById(id,(err, surveyToFill)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success:true, msg:"Successfully displayed a survey to fill", survey: surveyToFill});
        }
    });
};

//process survey fill page
module.exports.processSurveyPage = (req, res) => {
//get the survey responses
let filledSurvey = SurveyResponse({
    "title" : req.body.surveyTitle,
    "q1": req.body.question1,
    "q2": req.body.question2,
    "q3": req.body.question3,
    "q4": req.body.question4,
    "q5": req.body.question5,
    "q6": req.body.question6,
    "q7": req.body.question7,
    "q8": req.body.question8,
    "q9": req.body.question9,
    "q10": req.body.question10
});
//create survey response
SurveyResponse.create(newSurvey, (err, filledSurvey)=>{
    if(err){
        console.log(err);
        res.end(err);
    }
    else{ 
        res.json({success:true, msg:"Successfully submitted responses"});
    }
});
};

///display update page
module.exports.displayUpdatePage = (req, res) => {
    let id = req.params.id

    Survey.findById(id, (err, surveyToUpdate) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully Displayed Update page!'})
        }
    })
}

//update survey
module.exports.updateSurvey = (req, res) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id": id,
        "title": req.body.title,
        "lifetime": req.body.title,
        "active": req.body.active,
        "dateOpen": req.body.dateOpen,
        "dateClosed": req.body.dateClosed,
        "q1": req.body.q1,
        "q2": req.body.q2,
        "q3": req.body.q3,
        "q4": req.body.q4,
        "q5": req.body.q5,
        "q6": req.body.q6,
        "q7": req.body.q7,
        "q8": req.body.q8,
        "q9": req.body.q9,
        "q10": req.body.q10
    });
    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully updated survey!'});
        }
    });
};

//delete
module.exports.deleteSurvey = (req, res) => {
    let id = req.params.id

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.jston({success: true, msg: 'Successfully deleted Survey!'});
        }       
    })
};