import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { JWT_OPTIONS, JwtHelperService } from "@auth0/angular-jwt";
import { AuthService } from "./auth.service";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { SurveyRepository } from "./survey.repository";


@NgModule({
    imports: [HttpClientModule],
    providers: [SurveyRepository, StaticDataSource, {provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService,{
        provide: JWT_OPTIONS,
        useValue: JWT_OPTIONS
     }, JwtHelperService],
})
export class SurveyModule{}