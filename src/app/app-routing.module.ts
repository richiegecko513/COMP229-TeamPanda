import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateComponent } from './pages/survey/create/create.component';
import { ListComponent } from './pages/survey/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { UpdateComponent } from './pages/survey/update/update.component';
import { FillComponent } from './pages/survey/fill/fill.component';



const routes: Routes = [
  {path:'home', component: HomeComponent, data:{title:'Home'}},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'create', component: CreateComponent, data:{title:'Create Survey'}},
  {path: 'survey-list', component: ListComponent, data:{title:'Surveys'}},
  {path: 'login', component: LoginComponent, data:{title:'Login/Register'}},
  {path: 'login2', data:{title:'Login'}, redirectTo:'/admin/auth' ,pathMatch:'full'},
  {path: 'admin', loadChildren:()=> import('./admin/admin.module').then(m=>m.AdminModule)},
  {path: ':mode/:id', component: UpdateComponent, data:{title: ""}},
  {path: ':mode/', component: UpdateComponent, data:{title: "Create Survey"}},
  {path:'survey-list/fill/:id', component: FillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
