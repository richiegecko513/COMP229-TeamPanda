import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "./survey.model";
import { JwtHelperService } from "@auth0/angular-jwt"
import { User } from "./user.model";
import { SurveyResponse } from "./survey-response.model";


const PROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {

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
       
        this.user = new User();
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    }

    getActiveSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.baseUrl + '', this.httpOptions);
    }

    createSurvey(survey: Survey): Observable<Survey> {
        this.loadToken();
        return this.http.post<Survey>(this.baseUrl + 'create', survey, this.httpOptions);
    }
    
    updateSurvey(survey: Survey): Observable<Survey> {
        this.loadToken();
        console.log(JSON.stringify(survey));
        return this.http.post<Survey>(`${this.baseUrl}update/${survey._id}`, survey,  this.httpOptions);
    }
    
    deleteSurvey(id: Number): Observable<Survey> {
        this.loadToken();
        return this.http.get<Survey>(`${this.baseUrl}delete/${id}`, this.httpOptions);
    }

    // SURVEY RESPONSE

    saveResponse(response: SurveyResponse): Observable<SurveyResponse> {
      
        return this.http.post<SurveyResponse>(this.baseUrl + 'save', response, this.httpOptions);
    }

    //AUTHENTICATION

    register(user:User):Observable<any>{
        return this.http.post<any>(this.baseUrl + 'register', user, this.httpOptions);
        
    }

    authenticate(user: User): Observable<any>{

        return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
    }
  
    storeUserData(token: any, user: User): void {

        localStorage.setItem('id_token', 'Bearer ' + token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }
  
    logout(): Observable<any>{

        this.authToken = null;
        this.user = null;
        localStorage.clear();
        return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
    }
  
    loggedIn(): boolean{
        return !this.jwtService.isTokenExpired(this.authToken);
    }
  
    private loadToken(): void{

        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }

}
