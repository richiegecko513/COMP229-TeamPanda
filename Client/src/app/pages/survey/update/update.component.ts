import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model-2/survey.model';
import { SurveyRepository } from 'src/app/model-2/survey.repository';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent{ 

  updating = false;
  survey: Survey = new Survey();

  constructor(private repository: SurveyRepository, private router: Router, activeRoute: ActivatedRoute) {  

    //or edit
    this.updating = activeRoute.snapshot.params.mode ===  'update';

    if(this.updating){

      Object.assign(this.survey, repository.getSurvey(activeRoute.snapshot.params.id));
    }

   }

  //testing the html, the survey should be sent through the route
  //get survey(): Survey{
 
  //  return this.repository.getSurvey(2);
 //}

  ngOnInit(): void {
    //
  }

  save(form: NgForm): void{

    this.repository.saveSurvey(this.survey);
    this.router.navigateByUrl('/survey-list')

  }

}
