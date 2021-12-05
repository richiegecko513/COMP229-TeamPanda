import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/model-2/survey.model';
import { SurveyRepository } from 'src/app/model-2/survey.repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {

  survey: Survey = new Survey();

  constructor(private repository: SurveyRepository,
              private activeRoute: ActivatedRoute) { 
              
      Object.assign(this.survey, repository.getSurvey(activeRoute.snapshot.params.id));  
  
}

 
  ngOnInit(): void {
   
    console.log(this.survey);
    console.log(this.activeRoute.snapshot.params.id);
  }


}
