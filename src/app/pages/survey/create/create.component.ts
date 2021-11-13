import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

 
  questionsCount :number[];

  ngOnInit(): void {
    this.questionsCount = Array(10).fill(0).map((x,i)=>i);
  }

  
  //Future implementation maybe
  //addQuestions(){
  //  const count = 10;
  //  this.questionsCount = Array(10).fill(0).map((x,i)=>i);
  //}
  // deleteQuestion(){
  //  document.getElementById("delete").parentElement.parentElement.remove();      
  // }

  

}
