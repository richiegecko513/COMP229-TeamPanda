import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

 // constructor() { }

  //ngOnInit(): void {
  //}

  questionsCount :number[];

  addQuestions(){

    const count = (<HTMLInputElement>document.getElementById("questionCount")).value;
    this.questionsCount = Array(parseInt(count) -1).fill(0).map((x,i)=>i);
  }

}
