import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model-2/auth.service';
import { User } from 'src/app/model-2/user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user: User;
  public errorMessage: string;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {

    this.user = new User();
    document.getElementById('register').style.display = 'none';
  }

  authenticate(form: NgForm): void{

    if (form.valid){
    
      this.auth.authenticate(this.user).subscribe(data=>{
        if(data.success){

          this.auth.storeUserData(data.token, data.user);
          this.router.navigateByUrl("admin/main");
        }
        else{
          this.errorMessage ="Login Unsuccessful （；¬＿¬)";

        }
      });
      
    }
    else{

      this.errorMessage ="Form Data Invalid";
    }
  }

  create(form: NgForm): void
  {
    if (form.valid){
      
      
       this.auth.register(this.user).subscribe(data=>{
        console.log(data.success)
        if(data.success){

          this.router.navigateByUrl("/");
        }
        else{

          this.errorMessage =data.msg;
        }

      });

    }
    else{
      this.errorMessage ="Form Data Invalid";
    }
  }
  
  switchViews(){

    document.getElementById('login').style.display = 'none';
    document.getElementById('register').style.display = 'block';
    
  }
}
