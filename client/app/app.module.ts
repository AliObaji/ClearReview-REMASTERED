import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app-routing.module';

import { HomeComponent }  from './app.component';
import { courseCatalogue } from './components/course-catalogue/course-catalogue.component';
import { professorCatalogue } from './components/professor-catalogue/professor-catalogue.component';

@NgModule({
  imports:      [ BrowserModule,RoutingModule],
  declarations: [ HomeComponent,courseCatalogue,professorCatalogue ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
