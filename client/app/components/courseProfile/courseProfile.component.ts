/**
 * Created by Lenovo on 01-Jan-17.
 */
import {Component, Input} from '@angular/core';
import {course} from '../../objects/course';

@Component({
  selector: 'course-profile',
  moduleId: module.id,
  templateUrl: "courseProfile.component.html",
  styleUrls: ['courseProfile.component.css']

})
export class courseProfile{
  @Input() selectedCourse: course;
}
