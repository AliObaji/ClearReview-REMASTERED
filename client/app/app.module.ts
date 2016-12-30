import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app-routing.module';

import { HomeComponent }  from './app.component';
import { courseCatalogue } from './components/course-catalogue/course-catalogue.component';

@NgModule({
  imports:      [ BrowserModule,RoutingModule],
  declarations: [ HomeComponent,courseCatalogue ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
