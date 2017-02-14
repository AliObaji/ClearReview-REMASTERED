/**
 * Created by Lenovo on 14-Feb-17.
 */
import { Component,Input } from '@angular/core'
import {course} from '../../objects/course';


@Component({
  moduleId: module.id,
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html'
})

export class searchBar{

  @Input()
    courses: Array<course>;


  courseName: string;
  selectedSCourse: any;

  //course search selected
  public courseSSelected(course) {
    this.courseName = course ? course.title : 'none';
  }
}

