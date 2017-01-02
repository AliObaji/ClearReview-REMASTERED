/**
 * Created by Lenovo on 01-Jan-17.
 */
import {Component, Input} from '@angular/core';
import {course} from '../../objects/course';

import {CourseDetailProvider} from '../../services/course-detail-provider.service';

@Component({
  selector: 'course-profile',
  moduleId: module.id,
  templateUrl: "courseProfile.component.html",
  styleUrls: ['courseProfile.component.css','rotating-card.css']

})
export class courseProfile{
  @Input()
  myCourse: course;

  private rotatingCardClasses: any;

  constructor(private CourseDetailProvider:CourseDetailProvider){
    console.log("we are getting the id in detail" + this.myCourse);
    this.rotatingCardClasses = {'card-container': true,'manual-flip': true, 'hover':false};
  }

  rotateCard(){
    if(this.rotatingCardClasses.hover == false){
      this.rotatingCardClasses.hover = true;
    }
    else{
      this.rotatingCardClasses.hover = false;
    }
  }
}
