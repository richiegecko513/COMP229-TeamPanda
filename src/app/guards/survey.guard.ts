import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UpdateComponent } from '../pages/survey/update/update.component';



@Injectable()
export class SurveyGuard
{
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    if (this.firstNavigation)
    {
      this.firstNavigation = false;
      if (route.component !== UpdateComponent)
      {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}