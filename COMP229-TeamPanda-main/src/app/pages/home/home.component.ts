import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasepageComponent } from 'src/app/partials/basepage/basepage.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BasepageComponent implements OnInit{

  constructor(route: ActivatedRoute) {super(route); }

}
