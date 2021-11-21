import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  switchViews() {
    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
    
  }

   

}
