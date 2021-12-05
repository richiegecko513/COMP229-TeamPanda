import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestDataSource } from 'src/app/model-2/rest.datasource';


import { Survey } from 'src/app/model-2/survey.model';
import { SurveyRepository } from 'src/app/model-2/survey.repository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  surveys: Survey[];
  constructor(private repository: SurveyRepository, private datasource: RestDataSource, private router: Router) { }

  getSurveys(): Survey[]{
      return this.repository.getActiveSurveys( );
  }

  //use to check whether the page is getting the data
  ngOnInit(): void {
    //console.log(this.surveys.length);  
  }


  deleteSurvey(id : number): void{
    console.log("here")
    if(confirm('Are you sure')){
      this.repository.deleteSurvey(id);
    }
    else{
      this.router.navigateByUrl('/survey-list')
    }

  }

  updateSurvey(id: number):void{

    this.router.navigateByUrl('/update/'+ id);
  } 


  fillSurvey(id: number):void {

    this.router.navigateByUrl('/survey-list/fill/'+ id);

  }
}
