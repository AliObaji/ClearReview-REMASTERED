/**
 * Created by Lenovo on 17-Jan-17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {course} from '../objects/course';

import 'rxjs/Rx'

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//TODO: find elegant way to fix this
export class c {
  courses
}

//creating local storage to reduce number of get requests.
const courseArray = [];
let courseArrayPromise = Promise.resolve(courseArray);


@Injectable()
export class CourseListProvider {


  constructor(private http: Http) {

  }

  getAllCourses(): Promise<any>{
    return courseArrayPromise;
  }

  getCourses(): Observable<c> {
    return this.http.get('/courseList')
      .map((res: Response) => this.extractData(res))
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    courseArrayPromise.then(d => {
      [res.json()][0].courses.map((d,i) => courseArray[i] = d);
    });
    return res.json();
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
