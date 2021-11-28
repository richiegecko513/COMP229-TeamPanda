import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "./survey.model";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt"
import { User } from "./user.model";


const PROTOCOL = 'http';
const PORT = 4200;

@Injectable()
export class RestDataSource {

    //user
    user: User;
    baseUrl: string;
    authToken: string;
    private httpOptions =
        {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            })
        };
    constructor(private http: HttpClient, private jwtService: JwtHelperService) {
        //user
        this.user = new User();
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getActiveSurveys(): Observable<Survey[]> {
        this.loadToken();
        return this.http.get<Survey[]>(this.baseUrl + 'survey-list');
    }

    createSurvey(survey: Survey): Observable<Survey[]> {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey[]>(this.baseUrl + 'survey-list/create', survey);
    }

    authenticate(user:User): Observable<any>{

        return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions)
    }

    storeUserData(token: any, user: User): void{
        localStorage.setItem('id_token', 'Bearer' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    logout(): Observable<any>{
        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get<any>(this.baseUrl+'logout', this.httpOptions);

    }

    loggedIn(): boolean{

        return !    this.jwtService.isTokenExpired(this.authToken);
    }

    private loadToken(): void {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
}
