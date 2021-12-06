import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { User } from "./user.model";


@Injectable()
export class AuthService{

    user: User;
    users: User[] = [];

    constructor(private datasource :RestDataSource){

        this.user = new User();
    }


    authenticate(user: User): Observable<any>{

        return this.datasource.authenticate(user);
    }


    storeUserData(token: any, user: User):void {

        this.datasource.storeUserData(token, user);
    }


    get authenticated(): boolean {

        return this.datasource.loggedIn();
    }


    register(createdUser: User):void{

        this.datasource.register(createdUser).subscribe(u=>{
            this.users.push(createdUser);
        });

    }


    logout():Observable<any>{

        return this.datasource.logout();
    }

}