import { model, Schema } from "mongoose";


const SurveyTemplate = new Schema({
    _id: String,
    title: String,
    questionIds: [String],
    username: String, //until auth
    activeDate: Date,
    expiryDate: Date
},
    {
        timestamps: true
    });



const Survey = model('Survey', SurveyTemplate);


