import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Router } from "@angular/router";
import { AuthService } from "src/app/model-2/auth.service";


@Injectable()
export class AuthGuard{

    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;

    constructor(private router: Router, private auth: AuthService){}

    //check if user is authenticated to allow them access
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        if(this.auth.authenticated){
            console.log("Authenticated");
            return true;
        }
        else{
            console.log("can't Authenticate");
            this.router.navigate(['/admin/auth']);
            return false;
        }
    }
}
