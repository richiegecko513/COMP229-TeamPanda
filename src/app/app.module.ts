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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasepageComponent,
    HomeComponent,
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
