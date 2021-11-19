import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Survey } from "./survey.model";
import { JwtHelperService } from "@auth0/angular-jwt"

const PROTOCOL = 'http';
const PORT = 4200;

@Injectable()
export class RestDataSource {
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
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getActiveSurveys(): Observable<Survey[]> {
        return this.http.get<Survey[]>(this.baseUrl + 'survey-list');
    }

    createSurvey(survey: Survey): Observable<Survey[]> {
        console.log(JSON.stringify(survey));
        return this.http.post<Survey[]>(this.baseUrl + 'survey-list/create', survey);
    }
    private loadToken(): void {
        const token = localStorage.getItem('id_token');
        this.authToken = token;
        this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }
}
