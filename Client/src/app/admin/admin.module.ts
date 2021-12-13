import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UpdateComponent } from "../pages/survey/update/update.component";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";


const routing  = RouterModule.forChild([
    {path: 'auth', component: AuthComponent},
    {path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    children:[  ]},
    {path: ':mode/:id', component: UpdateComponent, data:{title: "Update Survey"}, canActivate: [AuthGuard]},
    {path: ':mode/', component: UpdateComponent, data:{title: "Create Survey"}, canActivate: [AuthGuard]},
    {path: '**', redirectTo:'auth'}
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations:[ AuthComponent, AdminComponent, UpdateComponent]
})
export class AdminModule{}