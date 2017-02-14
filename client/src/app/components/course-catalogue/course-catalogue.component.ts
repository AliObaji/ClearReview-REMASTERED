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
  courses: Array<course>;
  selectedCourse: course;



  courseName: string;
  selectedSCourse: any;

  //course search selected
  public courseSSelected(course) {
    this.courseName = course ? course.title : 'none';
  }




  constructor(private CourseDetailProvider:CourseDetailProvider, private CourseListProvider:CourseListProvider){}
  ngOnInit(): void {
    this.getCourses();
  }

  // TODO:figure out a better way to subscribe, this works but is not recognizing it as a JSON
  getCourses(): void{
    this.CourseListProvider.getCourses().subscribe(c => {
      console.log("this is in the component");
      console.log(c);

      this.courses = c.courses;
      this.selectedSCourse = this.courses[0];

    });
  }


  //test for local storage
  getpromises(){
    this.CourseListProvider.getAllCourses().then(c => console.log(c));
  }


  viewProfile(c: course){
    this.selectedCourse = c;
    // console.log("we are getting the id in cat" + c);
  }
}
