import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { SurveyRepository } from "./survey.repository";


@NgModule({
    providers: [SurveyRepository, StaticDataSource, {provide: StaticDataSource }],
})
export class SurveyModule{}