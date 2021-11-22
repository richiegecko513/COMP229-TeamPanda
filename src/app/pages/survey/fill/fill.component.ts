import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model-2/survey.model';
import { SurveyRepository } from 'src/app/model-2/survey.repository';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {

 

  constructor(private repository: SurveyRepository) {   }

  //testing the html, the survey should be sent through the route
  get survey(): Survey{
 
    return this.repository.getSurvey(2);
 }


  ngOnInit(): void {
   
    console.log(this.survey.q1);
  }


}
