/**
 * Created by Lenovo on 30-Dec-16.
 */
import {Component} from '@angular/core';
import {course} from '../../objects/course';

@Component({
  moduleId: module.id,
  selector: 'catalogue',
  templateUrl: 'course-catalogue.component.html'

})
export class courseCatalogue{
  courses: course[];
  constructor(){
    this.courses = [
      {id:0,image:  "../app/assets/Images/defCardImage.png", name: "CMPS", semester: "spring 2016", title: "Introduction to Programming", number: 200}
    ]
  }

}
