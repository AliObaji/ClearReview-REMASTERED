import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {FormsModule} from "@angular/forms";

import { RoutingModule } from './app-routing.module';

import { HomeComponent }  from './app.component';
import { courseCatalogue } from './components/course-catalogue/course-catalogue.component';
import { professorCatalogue } from './components/professor-catalogue/professor-catalogue.component';
import { courseProfile } from './components/courseProfile/courseProfile.component';

import { CourseDetailProvider } from './services/course-detail-provider.service';
import { CourseListProvider } from './services/course-list-provider.service';
import { ProfessorListProvider } from './services/professor-list-provider.service';


@NgModule({
  declarations: [
    HomeComponent,
    courseCatalogue,
    professorCatalogue,
    courseProfile
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [
    CourseDetailProvider,
    CourseListProvider,
    ProfessorListProvider
  ],
  bootstrap: [HomeComponent]
})
export class AppModule { }
