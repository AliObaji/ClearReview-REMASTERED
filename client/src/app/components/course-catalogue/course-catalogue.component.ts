/**
 * Created by Lenovo on 30-Dec-16.
 */
import {Component, OnInit} from '@angular/core';
import {course} from '../../objects/course';
import {CourseListProvider} from '../../services/course-list-provider.service';

@Component({
  moduleId: module.id,
  selector: 'catalogue',
  templateUrl: 'course-catalogue.component.html',
  styleUrls: ['course-catalogue.component.css']
})
export class courseCatalogue implements OnInit{
  courses: Array<course>;
  selectedCourse: course;

  constructor(private CourseListProvider:CourseListProvider){}
  ngOnInit(): void {
    this.getCourses();
  }

  // TODO:figure out a better way to subscribe, this works but is not recognizing it as a JSON
  getCourses(): void{
    this.CourseListProvider.getCourses().subscribe(c => {
      this.courses = c.courses;
    });
  }

  //whenever a card is clicked, changed the selected course in order to retrieve the course details.
  viewProfile(c: course){
    this.selectedCourse = c;
  }
}
