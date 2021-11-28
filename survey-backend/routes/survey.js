let express = require('express');
let router = express.Router();

let surveyController = require('../controllers/survey');


//GET route for displaying surveys
router.get('/', surveyController.getSurveys);

//Get route for displaying the users - just to check the user list
router.get('/users', surveyController.getUsers);

//GET route for displaying create new survey page
router.get('/create', surveyController.displayCreatePage);

//POST route for processing create new survey page
router.post('/create', surveyController.createSurvey);

//GET route for displaying fill survey page
router.get('take-survey/:id', surveyController.displaySurvey);

//POST route for processing fill survey page
router.post('take-survey/:id', surveyController.processSurveyPage);

//GET route for displaying update page
router.get('/update/:id', surveyController.displayUpdatePage);

//POST route for processing udpate page
router.post('/update/:id', surveyController.updateSurvey);

//GET to perform deletion
router.get('/delete/:id', surveyController.deleteSurvey);


//Post route for processing the login page
router.post('/login', surveyController.processLoginPage)

//Get route for displaying the register page
//router.get('/register', indexController.displayRegisterPage)

//Post route for processing the register page
router.post('/register', surveyController.processRegisterPage)

//Get to perform user logout
router.get('/logout', surveyController.performLogout)

module.exports = router;
