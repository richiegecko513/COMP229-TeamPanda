let Survey = require("../models/survey");
let Response = require("../models/survey-response");


//Get the survey to display it 
module.exports.saveResponse = (req,res,next)=>{


    let newResponse = Response({

        "title":req.body.title,
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
    })


    Response.create(newResponse, (err, Response)=>{

        if(err){

            console.log(err);
            res.end(err);


        } else{ 
            res.json({success:true, msg:"Successfully Saved Response"});
        }
    })

}
