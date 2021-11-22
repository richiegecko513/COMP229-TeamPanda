import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/survey/create/create.component';
import { ListComponent } from './pages/survey/list/list.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [
  {path:'home', component: HomeComponent, data:{title:'Home'}},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'create', component: CreateComponent, data:{title:'Create Survey'}},
  {path: 'survey-list', component: ListComponent, data:{title:'Surveys'}},
  {path: 'login', component: LoginComponent, data:{title:'Login/Register'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
