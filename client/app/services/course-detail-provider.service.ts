/**
 * Created by Lenovo on 01-Jan-17.
 */
import { Injectable } from '@angular/core';

import {course} from '../objects/course';
import {Courses} from '../objects/mock-courses';

import 'rxjs/Rx'

@Injectable()
export class CourseDetailProvider{
  //
  // getDetails():Promise<course>{
  //
  // }

  getCourses():Promise<course[]>{
    return Promise.resolve(Courses);
  }
}
