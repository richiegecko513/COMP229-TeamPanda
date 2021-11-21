let express = require('express');
let router = express.Router();

let surveyController = require('../controllers/survey');

//GET route for displaying surveys
router.get('/survey-list', surveyController.getSurveys);

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

module.exports = router;
