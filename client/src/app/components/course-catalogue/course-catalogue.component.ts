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
      console.log(this.courses);
    });
  }

  //test for local storage
  getpromises(){
    this.CourseListProvider.getAllCourses().then(c => console.log(c));
  }

  viewProfile(c: course){
    this.selectedCourse = c;
  }
}
