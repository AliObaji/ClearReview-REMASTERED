/**
 * Created by Lenovo on 14-Feb-17.
 */
import { Component,OnInit } from '@angular/core'
import {course} from '../../objects/course';

import {CourseListProvider} from '../../services/course-list-provider.service';


@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styles: [`
        .typeahead-input,
        .typeahead-typeahead{
            width: 250px;
            padding: 8px;
            border-radius: 5px;
        }
    `]
})

export class searchBar implements OnInit{

  courses: Array<course>;
  courseName: string;
  selectedSCourse: any;
  private searchBarStyles: any;

  constructor(private CourseListProvider:CourseListProvider){}

  ngOnInit() {
    this.getCourses();
    this.searchBarStyles = {'margin-left': '50%'};
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
