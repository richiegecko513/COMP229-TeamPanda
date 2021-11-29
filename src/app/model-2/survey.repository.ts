
import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import {StaticDataSource} from './static.datasource'
import { RestDataSource } from "./rest.datasource";



@Injectable()
export class SurveyRepository
{
    private surveys:Survey[] = [];
    private activeSurveys: Survey[] = [];
    
    constructor(private dataSource: RestDataSource )
    {
        
       dataSource.getActiveSurveys().subscribe(data =>{  
        this.surveys = data;  
        
        //get the active surveys
        this.activeSurveys = data.filter(s => s.active == "true");
        //change the active surveys to inactive if the end date equals todays date
        this.checkActive();
        //reassign the active surveys
        this.activeSurveys = data.filter(s => s.active == "true");
        console.log(this.activeSurveys);
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
    
    saveSurvey( savedSurvey: Survey):void{

        if(savedSurvey._id === null|| savedSurvey._id === 0 || savedSurvey._id === undefined){
            this.dataSource.createSurvey(savedSurvey).subscribe(b=>{
                this.surveys.push(savedSurvey);
            });
        }
        else{
            this.dataSource.updateSurvey(savedSurvey).subscribe(survey =>{
                this.surveys.splice(this.surveys.findIndex(s => s._id === savedSurvey._id), 1, savedSurvey)
            });
        }
    }
 
    
    deleteSurvey(deletedSurveyId : number):void{

        this.dataSource.deleteSurvey(deletedSurveyId).subscribe(survey =>{
    this.surveys.splice(this.surveys.findIndex(s => s._id === deletedSurveyId), 1)})

    }
}





