let express = require('express');
let router = express.Router();
let passport = require('passport');
let surveyController = require('../controllers/survey');
let responseController = require('../controllers/survey-response')

//GET route for displaying surveys
router.get('/', surveyController.getSurveys);

//Get route for displaying the users - just to check the user list
router.get('/users', surveyController.getUsers);


//POST route for processing create new survey page
router.post('/create', surveyController.createSurvey);

//POST route for processing fill survey page
router.post('/save', responseController.saveResponse);


//POST route for processing udpate page
router.post('/update/:id', surveyController.updateSurvey);

//GET to perform deletion
router.get('/delete/:id', surveyController.deleteSurvey);


//Post route for processing the login page
router.post('/login', surveyController.performLogin)

//Post route for processing the register page
router.post('/register', surveyController.processRegisterPage)

//Get to perform user logout
//router.get('/logout', surveyController.performLogout)

module.exports = router;
