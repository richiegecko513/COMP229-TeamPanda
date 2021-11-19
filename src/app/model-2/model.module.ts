import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";
import { SurveyRepository } from "./survey.repository";


@NgModule({
    imports: [HttpClientModule],
    providers: [SurveyRepository, StaticDataSource, {provide: StaticDataSource, useClass: RestDataSource }, RestDataSource],
})
export class SurveyModule{}