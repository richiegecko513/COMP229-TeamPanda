import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/survey/list/list.component';
import { FillComponent } from './pages/survey/fill/fill.component';
import { SurveyGuard } from './guards/survey.guard';

const routes: Routes = [
  {path:'home', component: HomeComponent, data:{title:'Home'}},
  {path:'', redirectTo:'/home', pathMatch:'full'},

  {path: 'survey-list', component: ListComponent, data:{title:'Surveys'}},

  {path: 'login', data:{title:'Login'}, redirectTo:'/admin/auth' ,pathMatch:'full'},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},

  {path:'survey-list/fill/:id', component: FillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[SurveyGuard]
})
export class AppRoutingModule { }
