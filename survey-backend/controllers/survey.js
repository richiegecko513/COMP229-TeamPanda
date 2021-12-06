let Survey = require("../models/survey");


module.exports.getSurveys = (req,res,next)=>{

    Survey.find((err, surveyList)=>{
        if(err){
            //
        }
        else{
            res.json(surveyList)
        }
    })

}

//CREATE
//to do - Reload the page after creating to show new survey
module.exports.createSurvey = (req,res,next)=>{

    //creating the survey
    let newSurvey = Survey({

        "title": req.body.title,
        "lifetime":req.body.lifetime,
        "active":"true",
        "dateOpen":"",
        "dateClosed":"",
        "q1":req.body.q1,
        "q2":req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
        "q5":req.body.q5,
        "q6":req.body.q6,
        "q7":req.body.q7,
        "q8":req.body.q8,
        "q9":req.body.q9,
        "q10":req.body.q10

    });

    //DATE

    //create a start date
    const start = new Date();
    //extract the data
    let month = start.getUTCMonth() + 1; 
    let day = start.getUTCDate();
    let year = start.getUTCFullYear();

    //put it all together to make year/month/day string format
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
            res.json({success:true, msg:"Successfully Added a Survey"});
        }
    })


}

//UPDATE

module.exports.updateSurvey = (req,res,next)=>{


    //getting the id from the request
    let id = req.params.id;

    //creating the survey
    let updatedSurvey = Survey({

        "_id":id,
        "title": req.body.title,
        "lifetime":req.body.lifetime,
        "active":"true",
        "dateOpen":req.body.dateOpen,
        "dateClosed":"",
        "q1":req.body.q1,
        "q2":req.body.q2,
        "q3":req.body.q3,
        "q4":req.body.q4,
        "q5":req.body.q5,
        "q6":req.body.q6,
        "q7":req.body.q7,
        "q8":req.body.q8,
        "q9":req.body.q9,
        "q10":req.body.q10

    });
   
    

     //DATE
     //taking the dateOpen which is in year/month/day string format and splitting it
      date = req.body.dateOpen.split("/");

      //assigning each date element
      year = date[0];
      month = date[1];
      day = date[2];

      //make the end date using dateOpen
      const end = new Date(year, month-1, day, 0, 0);
      //adding  the survey lifetime
      end.setDate(end.getDate()+updatedSurvey.lifetime);

      //extracting the date   
      month = end.getUTCMonth() + 1; 
      day = end.getUTCDate();
      year = end.getUTCFullYear();

      //putting the elements together
      updatedSurvey.dateClosed = year + "/" + month + "/" + day;

      //Updating the survey record
      Survey.updateOne({_id:id}, updatedSurvey,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("updated!");
            res.json(updatedSurvey);
            //res.json({success: true,msg:"Successfully Updated Survey"});
        }
      });

};

//DELETE
//To do - reload the page after deleting
module.exports.deleteSurvey = (req,res,next)=>{

    let id = req.params.id;

    Survey.deleteOne({_id:id}, (err) =>{
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.json({success: true, msg:"Successfully deleted Survey"});
            
        }
        
    });

};

//=============== AUTH ======================

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// enable jwt
let jwt = require('jsonwebtoken');
let DB = require('../config/db');

let userModel = require('../models/user');
let User = userModel.User;


module.exports.performLogin = (req,res,next)=>{


    passport.authenticate('local',
    (err, user, info)=>
    {

        //if there is a server error
        if(err){
            return next(err);
            
        }
        //if there is a user error
        if(!user){

            console.log("could not authenticate")
            return res.json({success:false, msg:"Could not Authenticate - User Error"});

        }

        req.login(user,(err)=>{

            if(err){
                return next(err);

            }
            const payload = {
                _id : user._id,
                username: user.username,
                email: user.email,
            }

            const authToken = jwt.sign(payload, DB.Secret, {expiresIn: 604800});

            return res.json({success: true, msg :"Successfully logged in.", user:{
                _id : user._id,
                username: user.username,
                email: user.email
            }, token: authToken});
        });


    })(req,res,next);


};


module.exports.find = (req,res,next)=>{


    id = req.params.id;

    User.findById(2, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("Result : ", docs);
        }
    });



}





module.exports.processRegisterPage = (req,res,next) => {

    //instantiate user object
    let newUser = new User({
        username: req.body.username,
        email :req.body.email,
    });

    User.register(newUser, req.body.password,(err)=>{
        if(err){

            console.log("Error: Inserting New User.")
            if(err.name =="UserExistsError"){

                //req.flash('registerMessage','Registration Error: User Already Exists.');
                console.log("Error: User Already Exists.")
                return res.json({success:false, msg:"User Already Exists"});

            }
            return res.json({success:false, msg:"User Failed to Registered"});
        }
        else{

            console.log("sucesss")
            return res.json({success:true, msg:"User Registered successfully"});

        }
    })
}



//checking if we are getting the user collection
//get all Users 
exports.getUsers = (req, res, next) => {

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