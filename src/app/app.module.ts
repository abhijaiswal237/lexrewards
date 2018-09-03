import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { LoggedoutDashboardComponent } from './loggedout-dashboard/loggedout-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoggedoutDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
