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
            res.json({error: err});
        }
        else
        {
            res.json({success: true, msg: 'Sucessfully created new survey'});
        }
    });
};


module.exports.processAddPage = (req,res,next)=>{

    let newSurvey = Survey({

        "title" : req.body.surveyTitle,
        "lifetime": req.body.surveyLifetime,
        "active" : "true",
        "dateOpen" :"",
        "dateClosed":"" ,
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

    })

    //DATE
      //make the start date in UFC year/month/day format 
      const start = new Date();
      let month = start.getUTCMonth() + 1; 
      let day = start.getUTCDate();
      let year = start.getUTCFullYear();

      newSurvey.dateOpen = year + "/" + month + "/" + day;

      //make the end date
      const end = new Date(start);
      end.setDate(end.getDate()+newSurvey.lifetime);
      month = end.getUTCMonth() + 1; 
      day = end.getUTCDate();
      year = end.getUTCFullYear();

      newSurvey.dateClosed = year + "/" + month + "/" + day;

      Survey.create(newSurvey, (err, Survey)=>{
        if(err){
            console.log(err);
            res.end(err);

        }
        else{ 
            res.json({success:true, msg:"Successfully Added a survey"});
        }

      })
}



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
            // res.end(err);
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
        // res.end(err);
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
            // res.end(err);
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
            // res.end(err);
        }
        else
        {
            res.json({success: true, msg: 'Successfully updated survey!', survey: updatedSurvey});
        }
    });
};


module.exports.processUpdatePage = (req,res,next)=>{

    let id = req.params.id;

    let updateSurvey = Survey({
        "_id": id,
        "title" : req.body.surveyTitle,
        "lifetime": req.body.surveyLifetime,
        "active" : "true",
        "dateOpen" :"",
        "dateClosed":"" ,
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

    //DATE
      //make the start date in UFC year/month/day format 
      const start = new Date();
      let month = start.getUTCMonth() + 1; 
      let day = start.getUTCDate();
      let year = start.getUTCFullYear();

      updateSurvey.dateOpen = year + "/" + month + "/" + day;

      //make the end date
      const end = new Date(start);
      end.setDate(end.getDate()+updateSurvey.lifetime);
      month = end.getUTCMonth() + 1; 
      day = end.getUTCDate();
      year = end.getUTCFullYear();

      updateSurvey.dateClosed = year + "/" + month + "/" + day;



    Survey.updateOne({_id:id}, updateSurvey,(err)=>{
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success:true, msg:"Successfully updated new survey", survey: updateSurvey});
        }

    });   
};


//delete
module.exports.deleteSurvey = (req, res, next) => {
    let id = req.params.id
    let query = {_id: id};
    /*
    Survey.deleteOne({_id: id}, (err) => {
       
        if(err)
        {
            console.log(err);
            // res.end(err);
        }
        else
        { console.log("hereeeeeeeeeee")
        console.log(id)
            res.json({success: true, msg: 'Successfully deleted Survey!'});
        }       
    })*/

    Survey.find({_id: id}, function(err, obj){console.log("found")})

    Survey.deleteOne(query, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        
      });

  //  Survey.findByIdAndDelete(query)
};



module.exports.performDelete = (req,res,next)=>{

    let id = req.params.id;

    console.log(id)
    Survey.remove({_id:id},(err)=>{

        if(err){
            console.log(err);
            res.end(err);
        }
        else{

            res.json({success:true, msg:"Successfully deleted survey"});
        }

    });
};


// Authentication===========================

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

let userModel = require('../models/user');
let User = userModel.User;

 
module.exports.processLoginPage = (req,res,next)=>{
   
    passport.authenticate('local',
    (err, user, info)=>{
        console.log(user);
        //if there is a server error
        if(err){
            return next(err);
        }
        //if there is a user error
        if(!user){
            req.flash('loginMessage', 'Authentication Error');

            //return res.redirect('/api/login');
            return res.json({success:false, msg:""});

        }

        req.login(user,(err)=>{
            console.log("works?")
            if(err){
                return next(err);

            }
            const payload = {
                _id : user._id,
                username: user.username,
                email: user.email
            }

            const authToken = jwt.sign(payload, "SomeSecret", {expiresIn: 604800});

           return res.json({success: true, msg :"Successfully logged in.", user:{
                _id : user._id,
                username: user.username,
                email: user.email
            }, token: authToken});
        });


    })(req,res,next);


}



module.exports.processRegisterPage = (req,res,next) => {

    //instantiate user object
    let newUser = new User({
        username: req.body.username,
        email :req.body.email,
        displayName : req.body.displayName
    });

    User.register(newUser, req.body.password,(err)=>{
        if(err){

            console.log("Error: Inserting New User.")
            if(err.name =="UserExistsError"){

                req.flash('registerMessage','Registration Error: User Already Exists.');
                console.log("Error: User Already Exists.")

            }
            return res.render('auth/register', {
                title:"Register",
                message: req.flash('registerMesage'),
                displayName: req.user ? req.user.displayName :''

            });
        }
        else{

            return res.json({sucess:true, msg:"User Registered successfully"});

        }
    })
}




module.exports.performLogout = (req,res,next)=>{

    req.logout();
    //res.redirect('/');
     return res.json({sucess:true, msg:"User logged out successfully"});

}


//checking if we are getting the user collection
//get all Users 
exports.getUsers = (req, res) => {
    User.find((err, userList) =>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.status(200).json({
                message: 'All users fetched successfully',
                UserList: userList
            });
        }
    })
};