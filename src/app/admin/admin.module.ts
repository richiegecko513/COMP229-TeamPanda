import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";


const routing  = RouterModule.forChild([
    {path: 'auth', component: AuthComponent},
    {path: 'auth', component: AuthComponent, canActivate: [AuthGuard],
    children:[
        {path: '**', redirectTo:'survey-list'}]
    },
    {path: '**', redirectTo:'auth'}
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations:[ AuthComponent]
})
export class AdminModule{}