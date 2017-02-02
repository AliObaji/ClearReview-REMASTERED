/**
 * Created by Lenovo on 17-Jan-17.
 */
import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {course} from '../objects/course';

import 'rxjs/Rx'

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//TODO: find elegant way to fix this
export class c{
  courses
}

@Injectable()
export class CourseListProvider{
  constructor(private http:Http){

  }
  private c:c;
  getCourses():Observable<c>{
     this.c.courses = this.http.get('/courseList')
      .map(this.extractData)
      .catch(this.handleError);

    return this.c.courses;
  }

  private extractData(res:Response){
    return res.json();
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
