import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill',
  templateUrl: './fill.component.html',
  styleUrls: ['./fill.component.css']
})
export class FillComponent implements OnInit {

  //constructor() { }

  
   questionsCount :number[];
  ngOnInit(): void {
    this.questionsCount = Array(10).fill(0).map((x,i)=>i);
  }


}
