/**
 * Created by Lenovo on 01-Jan-17.
 */
import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {course} from '../objects/course';

import 'rxjs/Rx'


// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CourseDetailProvider{
  constructor(private http:Http ){}

  getDetails(id: number):Promise<course>{
    return this.getCourses()
      .then(courses => courses.find(course => course.id === id));
  }

  getCourses():Promise<course[]>{
    return Promise.resolve(Courses);
  }

  getDetail(id:number):Observable<course>{
    let params: URLSearchParams = new URLSearchParams();
    params.set("id",""+id);
    return this.http.get('/courseDetails',{
      search: params
    })
      .map(this.extractData)
      .catch(this.handleError)
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
