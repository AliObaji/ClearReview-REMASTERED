/**
 * Created by Lenovo on 30-Dec-16.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './app.component';
import { courseCatalogue } from './components/course-catalogue/course-catalogue.component';

//TODO: separate the dashboard (home component) from appcomponent so we can route to Home at root.
const routes : Routes = [
  // {path: '', component: HomeComponent},
  {path: 'courseCatalogue', component: courseCatalogue}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule{

}
