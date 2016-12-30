import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent }  from './app.component';
import { courseCatalogue } from './components/course-catalogue/course-catalogue.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ HomeComponent,courseCatalogue ],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
