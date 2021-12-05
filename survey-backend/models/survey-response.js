let mongoose = require('mongoose');

//creating a model class
let SurveyResponse = mongoose.Schema({

     //_id :Number,

     title : String,
    // lifetime: Number,
    //active : String,
    //dateOpen :String,
    // dateClosed: String,
     q1: String,
     q2: String,
     q3: String,
     q4: String,
     q5: String,
     q6: String,
     q7: String,
     q8: String,
     q9: String,
     q10: String  

},
{

    collection:"survey_response"

});


//return the model
module.exports = mongoose.model('SurveyResponse',SurveyResponse);