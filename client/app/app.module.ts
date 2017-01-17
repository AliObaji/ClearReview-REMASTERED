import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { RoutingModule } from './app-routing.module';

import { HomeComponent }  from './app.component';
import { courseCatalogue } from './components/course-catalogue/course-catalogue.component';
import { professorCatalogue } from './components/professor-catalogue/professor-catalogue.component';
import { courseProfile } from './components/courseProfile/courseProfile.component';

import { CourseDetailProvider } from './services/course-detail-provider.service';
import { CourseListProvider } from './services/course-list-provider.service';
import { ProfessorListProvider } from './services/professor-list-provider.service';

@NgModule({
  imports:      [ BrowserModule,RoutingModule,HttpModule],
  declarations: [ HomeComponent,courseCatalogue,professorCatalogue,courseProfile ],
  providers: [CourseDetailProvider,CourseListProvider,ProfessorListProvider],
  bootstrap:    [ HomeComponent ]
})
export class AppModule { }
