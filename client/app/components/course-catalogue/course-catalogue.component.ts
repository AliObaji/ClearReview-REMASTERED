/**
 * Created by Lenovo on 30-Dec-16.
 */
import {Component, OnInit} from '@angular/core';
import {course} from '../../objects/course';
import {CourseDetailProvider} from '../../services/course-detail-provider.service';

@Component({
  moduleId: module.id,
  selector: 'catalogue',
  templateUrl: 'course-catalogue.component.html',
  styleUrls: ['course-catalogue.component.css']
})
export class courseCatalogue implements OnInit{
  courses: course[];
  selectedCourse: course;
  constructor(private CourseDetailProvider:CourseDetailProvider){}
  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void{
    this.CourseDetailProvider.getCourses().then(c=> this.courses = c);
  }


  viewProfile(c: course){
    this.selectedCourse = c;
  }

}
