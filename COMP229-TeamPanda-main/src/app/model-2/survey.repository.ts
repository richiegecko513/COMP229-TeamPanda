
import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import {StaticDataSource} from './static.datasource'



@Injectable()
export class SurveyRepository
{
    private surveys:Survey[] = [];
    private activeSurveys: Survey[] = [];
    
    constructor(private dataSource: StaticDataSource )
    {
        console.log("problem here");
        
       dataSource.getActiveSurveys().subscribe(data =>{
        console.log("problem in the method");
        this.surveys = data;  
        //get the active surveys
        this.activeSurveys = data.filter(s => s.active == "true");
        //change the active surveys to inactive if the end date equals todays date
        this.checkActive();
        //reassign the active surveys
        this.activeSurveys = data.filter(s => s.active == "true");
        });
     
    }

    getSurveys(): Survey[]
    {
        return this.surveys;
    }

    getSurvey(id: number): Survey
    {
        return this.surveys.find(s => s._id === id);
    }

    getActiveSurveys(): Survey[]{
        return this.activeSurveys;
    }

    checkActive(){

        this.activeSurveys.forEach(survey => {
            //check if the end date is todays date
            //note UTC date not EST
            const dateObj = new Date();
            const month = dateObj.getUTCMonth() + 1; 
            const day = dateObj.getUTCDate();
            const year = dateObj.getUTCFullYear();

            const today = year + "/" + month + "/" + day;
            if(new Date(survey.dateClosed) <= new Date (today)){
           
                survey.active ="false";
            }
        });

    }
    
    
}





