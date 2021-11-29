import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasepageComponent } from './partials/basepage/basepage.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/survey/list/list.component';
import { CreateComponent } from './pages/survey/create/create.component';
import { UpdateComponent } from './pages/survey/update/update.component';
import { FillComponent } from './pages/survey/fill/fill.component';
import { ListModule } from './pages/survey/list/list.module';
import { DeleteComponent } from './pages/survey/delete/delete.component';
import { LoginComponent } from './pages/login/login.component';
import { JwtModule } from '@auth0/angular-jwt';

import { FormsModule } from '@angular/forms';

export function jwtTokenGetter(): string{
  return localStorage.getItem('id_token');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasepageComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent,
    FillComponent,
    DeleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListModule,
    FormsModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
