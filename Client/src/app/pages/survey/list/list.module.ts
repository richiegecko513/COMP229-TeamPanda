import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { SurveyModule } from "src/app/model-2/model.module";

@NgModule({

    imports:[SurveyModule, BrowserModule, FormsModule],
 
})
export class ListModule{}