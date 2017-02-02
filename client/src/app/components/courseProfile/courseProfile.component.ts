/**
 * Created by Lenovo on 01-Jan-17.
 */
import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {course} from '../../objects/course';

import {CourseDetailProvider} from '../../services/course-detail-provider.service';

@Component({
  selector: 'course-profile',
  moduleId: module.id,
  templateUrl: "courseProfile.component.html",
  styleUrls: ['courseProfile.component.css','rotating-card.css']

})
export class courseProfile implements OnChanges{
  @Input()
  myCourse: course;

  private rotatingCardClasses: any;
  private currentCourse: course;

  constructor(private CourseDetailProvider:CourseDetailProvider){
    this.rotatingCardClasses = {'card-container': true,'manual-flip': true, 'hover':false};
  }
  //when the input changes, request the new course details.
  ngOnChanges(changes: any) {
    if(changes.myCourse.currentValue != undefined){
      console.log(this.myCourse._id);
      this.CourseDetailProvider.getDetail(this.myCourse._id).subscribe(details => this.currentCourse = details);
    }
  }

  //used to change the class of the card element, in order to trigger the animation
  rotateCard(){
    if(this.rotatingCardClasses.hover == false){
      this.rotatingCardClasses.hover = true;
    }
    else{
      this.rotatingCardClasses.hover = false;
    }
  }
}
