/**
 * Created by Lenovo on 01-Jan-17.
 */
import { Injectable } from '@angular/core';

import {course} from '../objects/course';
import {Courses} from '../objects/mock-courses';

import 'rxjs/Rx'

@Injectable()
export class CourseDetailProvider{

  getDetails(id: number):Promise<course>{
    console.log("number in the service is" + id);
    return this.getCourses()
      .then(courses => courses.find(course => course.id === id));
  }

  getCourses():Promise<course[]>{
    return Promise.resolve(Courses);
  }
}
