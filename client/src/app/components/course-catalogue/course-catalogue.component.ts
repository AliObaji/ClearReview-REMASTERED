/**
 * Created by Lenovo on 30-Dec-16.
 */
import {Component, OnInit} from '@angular/core';
import {course} from '../../objects/course';
import {CourseDetailProvider} from '../../services/course-detail-provider.service';
import {CourseListProvider} from '../../services/course-list-provider.service';

@Component({
  moduleId: module.id,
  selector: 'catalogue',
  templateUrl: 'course-catalogue.component.html',
  styleUrls: ['course-catalogue.component.css']
})
export class courseCatalogue implements OnInit{
  courses: course[];
  selectedCourse: course;
  constructor(private CourseDetailProvider:CourseDetailProvider, private CourseListProvider:CourseListProvider){}
  ngOnInit(): void {
    this.getCourses();
  }

  // TODO:figure out a better way to subscribe, this works but is not recognizing it as a JSON
  getCourses(): void{
    this.CourseListProvider.getCourses().subscribe(c => this.courses = c.courses);
  }


  viewProfile(c: course){
    this.selectedCourse = c;
    console.log("we are getting the id in cat" + c);
  }
}
