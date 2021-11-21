import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model-2/survey.model';
import { SurveyRepository } from 'src/app/model-2/survey.repository';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{ 

  constructor(private repository: SurveyRepository) {   }

  //testing the html, the survey should be sent through the route
  get survey(): Survey{
 
    return this.repository.getSurvey(2);
 }

  ngOnInit(): void {
    //
  }
}
