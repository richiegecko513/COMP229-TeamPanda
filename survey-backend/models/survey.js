/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Survey = new Schema({
    _id: {
        type: String
    },
    title: {
        type: String
    },
    lifetime: {
        type: Number
    },
    active: {
        type: String
    },
    dateOpen: {
        type: String
    },
    dateClosed: {
        type: String
    },
    q1: {
        type: String
    },
    q2: {
        type: String
    },
    q3: {
        type: String
    },
    q4: {
        type: String
    },
    q5: {
        type: String
    },
    q6: {
        type: String
    },
    q7: {
        type: String
    },
    q8: {
        type: String
    },
    q9: {
        type: String
    },
    q10: {
        type: String
    }

},
{
    collection: 'survey-list'
})

module.exports = mongoose.model('Survey', Survey);