import { Injectable } from "@angular/core";
import { Observable, from } from "rxjs";
import { Survey } from "./survey.model";


@Injectable()
export class StaticDataSource{

    date: string;
   constructor(){
     this.date = Date();
   }
    private surveys: Survey[] =[
        
        new Survey(1, "Plant Survey",4,"true", "2021/11/14", "2021/11/14","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(2, "Cup Survey",3,"true","", "","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(3, "Lamp Survey",2,"true","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(4, "Pen Survey",6,"true","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(5, "Spider Survey",2,"true","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(6, "Pet Fish Survey",7,"true","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(7, "Window Survey",4,"false","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(8, "Floor Survey",2,"false","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(9, "Jacket Survey",5,"false","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" ),
        new Survey(10, "cat Survey",5,"flase","","","q1","q2","q3","q4","q5","q6","q7","q8","q9","q10" )

    ];

    set Dates(surveys :Survey[]){

        surveys.forEach(element => {
           
            //make the start date in UFC year/month/day format 
            const start = new Date();
            let month = start.getUTCMonth() + 1; 
            let day = start.getUTCDate();
            let year = start.getUTCFullYear();
    
            element.dateOpen = year + "/" + month + "/" + day;

            //make the end date
            const end = new Date(start);
            end.setDate(end.getDate()+element.lifetime);
            month = end.getUTCMonth() + 1; 
            day = end.getUTCDate();
            year = end.getUTCFullYear();

            element.dateClosed = year + "/" + month + "/" + day;
            
        });
    }


    getActiveSurveys(): Observable<Survey[]>{

        return from([this.surveys]);

    }

    createSurvey(survey: Survey): Observable<Survey[]> {
        console.log(JSON.stringify(survey));
        return from ([this.surveys]);
    }
}