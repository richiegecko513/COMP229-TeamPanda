import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { Observable, from } from "rxjs";



//can't figure out how to insert survey questions 
@Injectable()
export class StaticDataSource
{
    private surveys: Survey[] =
    [
        new Survey('1', 'Survey 1',{'1':'Is the sky blue??':'True'},'User1', '2021-03-03', '2021-04-05'),
        new Survey('2', 'Survey 2', 4, 'user1', '2021-02-02','2021-03=02'),
        new Survey('3', 'survey 3', 4, 'user2', '2020-11-02', '2020-09-09'),
        new Survey('5','Survey 5', 4, 'user5', '2021-03-03', '2021-04-05')
    ]

    getActiveSurveys(): Observable<Survey[]>
    {
        return from ([this.surveys]);
    }
}

