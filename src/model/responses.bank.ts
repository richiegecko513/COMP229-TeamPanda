import { model, Schema } from "mongoose";

const ResponseSchema = new Schema({
    questionId: String,
    label: String,
    answer: [String]
});

const ResponseBank = new Schema({
    surveyId: {
        type: String,
        required: true
    },
    respondantId: {
        type: String,
        required: true
    },
    responses: [ResponseSchema]
},
    {
        timestamps: true
    }
);
const Responses = model('Survey Responses', ResponseBank);