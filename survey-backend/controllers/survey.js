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


module.exports.createSurvey = (req,res,next)=>{

   

}





module.exports.updateSurvey = (req,res,next)=>{


    //getting the id from the request
    let id = req.params.id;
    console.log(id);

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

      console.log(updatedSurvey);

      //Updating the survey record
      Survey.updateOne({_id:id}, updatedSurvey,(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("updated!");
            res.json(updatedSurvey);
        }
      });

};





module.exports.deleteSurvey = (req,res,next)=>{

   

}

module.exports.displaySurvey = (req,res,next)=>{

   

}