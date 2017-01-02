/**
 * Created by Lenovo on 01-Jan-17.
 */
import {Component, Input, OnChanges, SimpleChanges, AfterViewChecked} from '@angular/core';
import {course} from '../../objects/course';

import {CourseDetailProvider} from '../../services/course-detail-provider.service';

declare var $:JQueryStatic;

@Component({
  selector: 'course-profile',
  moduleId: module.id,
  templateUrl: "courseProfile.component.html",
  styleUrls: ['courseProfile.component.css','rotating-card.css']

})
export class courseProfile implements AfterViewChecked{
  @Input()
  myCourse: course;

  private rotatingCardClasses: any;
  myclass: any;

  constructor(private CourseDetailProvider:CourseDetailProvider){
    console.log("we are getting the id in detail" + this.myCourse);
    this.myclass = {'classblue': true,'classred': false};
    this.rotatingCardClasses = {'card-container': true,'manual-flip': true, 'hover':false};
  }

  changeClass(){
    if(this.myclass.classblue){
      this.myclass.classblue = false;
      this.myclass.classred = true;
    }
    else{
      this.myclass.classblue = true;
      this.myclass.classred = false;
    }

  }

  rotateCard(){
    if(this.rotatingCardClasses.hover == false){
      this.rotatingCardClasses.hover = true;
    }
    else{
      this.rotatingCardClasses.hover = false;
    }

  }

  ngAfterViewChecked(){
    var $button = $('#flipButton');
    $button.click(function(){
      console.log("I am here on click")
    });
    console.log("I am here");
  }

  // ngOnChanges(changes: SimpleChanges):void{
  //   console.log("current value is" + changes.myCourseId.currentValue);
  //   this.getCourse(changes.myCourseId.currentValue);
  // }
  // ngOnInit(): void{
  //   console.log("we are getting the id in detail" + this.myCourseId);
  //   // this.getCourse();
  // }
  // getCourse():void{
  //   this.CourseDetailProvider.getDetails(this.myCourseId)
  //     .then(c => this.selectedCourse = c);
  //   console.log(this.selectedCourse);
  // }
}
