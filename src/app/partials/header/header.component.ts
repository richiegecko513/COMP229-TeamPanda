import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from 'src/app/admin/auth/auth.guard';
import { AuthService } from 'src/app/model-2/auth.service';
import { User } from 'src/app/model-2/user.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router:Router, private authguard: AuthGuard, private authService: AuthService) { }

 // ngOnInit(): void {
  //}

  user: User;


 
 ngOnInit(): void {
  
    
    this.user = new User();

  }

  createSurvey():void{

    this.router.navigateByUrl('admin/survey-list/create')

  }

  isLoggedIn(): boolean
  {
    const result = this.authService.authenticated;
    if (result)
    {
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user.username);
    }
    return result;
  }

  onLogoutClick(): void
  {
    this.authService.logout().subscribe(data => {
      this.router.navigate(['/login']);
    });
  }



}
