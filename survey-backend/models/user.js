const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password:
        {
            type: String,
            default: '',
            trim: true,
            required: 'password is required'
        }
        */
       email:
       {
           type: String,
           default: '',
           trim: true,
           required: 'email address is required'
       },
       created:
       {
           type: Date,
           default: Date.now
       },
       update:
       {
           type: Date,
           default: Date.now
       }
    },
    {
        collection: "users"
    }
);

const options = ({missingPasswordError: 'Wrong/Missing Password'});
 User.plugin(passportLocalMongoose, options);
 s.User = mongoose.model('User', User);module.export