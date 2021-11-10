import { model, Schema } from "mongoose";


const SurveyTemplate = new Schema({
    _id: String,
    title: String,
    questionIds: [String],
    username: String, //until auth
},
    {
        timestamps: true
    });



const Survey = model('Survey', SurveyTemplate);


