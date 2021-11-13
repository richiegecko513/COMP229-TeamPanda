
import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import {StaticDataSource} from './static.datasource'
import { Date } from "mongoose";


Injectable()
export class SurveyRepository
{
    private surveys:Survey[] = [];
    private activeSurveys: Date[] = [];
    private staleSurveys: Date[] = []
    
    
    constructor(private dataSource: StaticDataSource )
    {
        dataSource.getActiveSurveys().subscribe(data => {
            this.surveys = data;
            this.activeSurveys = data.map(s => s.activeDate)
            .filter((a, index, array) => array.indexOf(a) === index).sort();
        });

    }
    getActiveSurveys(activeDate: Date = null): Survey[]
    {
        return this.surveys
        .filter(s => activeDate == null || activeDate === s.activeDate);
    }

    getSurvey(id: string): Survey
    {
        return this.surveys.find(s => s._id === id);
    }
    
}





