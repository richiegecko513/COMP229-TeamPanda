import { Component, OnInit } from '@angular/core';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent extends BasepageComponent{ 
  //constructor() { }

  //ngOnInit(): void {
  //}
  questionsCount :number[];

  ngOnInit(): void {
    this.questionsCount = Array(10).fill(0).map((x,i)=>i);
  }
}
