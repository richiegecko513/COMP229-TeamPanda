import { Component } from '@angular/core';

//!!!!!!!!!!!!!!!!!!! the path might be wrong
import { Survey } from 'src/model/survey.model';
import { SurveyRepository } from 'src/model/survey.repository';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  constructor(private repository: SurveyRepository) { }

  get surveys(): Survey[]{
 
     return this.repository.getActiveSurveys( );
  }

  //use to check whether the page is getting the data
  ngOnInit(): void {
    console.log(this.surveys.length);  
  }



}
