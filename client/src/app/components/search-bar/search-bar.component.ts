/**
 * Created by Lenovo on 14-Feb-17.
 */
import { Component,OnInit } from '@angular/core'
import {course} from '../../objects/course';

import {CourseListProvider} from '../../services/course-list-provider.service';


@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html'
})

export class searchBar implements OnInit{

  courses: Array<course>;
  courseName: string;
  selectedSCourse: any;

  constructor(private CourseListProvider:CourseListProvider){}

  ngOnInit() {
    this.getCourses();
  }

  private getCourses(){
    this.CourseListProvider.getAllCourses().then(c =>{
      this.courses = c;
      this.selectedSCourse = this.courses[0];
    });
  }

  //course search selected
  public courseSSelected(course) {
    this.courseName = course ? course.title : 'none';
  }
}
