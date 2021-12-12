import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model-2/auth.service';
import { User } from 'src/app/model-2/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  user: User
  
  constructor(private authService: AuthService,
              private router:Router) { }

 ngOnInit(): void {
  
  this.user = new User();

  }
  createSurvey():void{

    this.router.navigateByUrl('/survey-list/create')

  }

  isLoggedIn(): boolean
  {
    const result = this.authService.authenticated;
    if (result)
    {
      this.user = JSON.parse(localStorage.getItem('user'));
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
