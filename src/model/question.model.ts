import { model, Schema } from "mongoose";

const QuestionTypeOptions = {
    multiplechoice: 'multiple_choice',
    yesno: 'yes_no'

};

const QuestionType = new Schema({
    label: String
});

const SurveyQuestions = new Schema({
    label: String,
    description: String,
    options: [QuestionTypeOptions],
    questionType: {
        type: String,
        enum: Object.keys(QuestionType).map(
            (key) => QuestionType[key]
        ),
    },
},
    {
        timestamps: true
    })
const Questions = model('Questions', SurveyQuestions)