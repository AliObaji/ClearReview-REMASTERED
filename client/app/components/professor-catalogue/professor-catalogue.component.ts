/**
 * Created by Lenovo on 31-Dec-16.
 */
import {Component} from '@angular/core';
import {professor} from '../../objects/professor';


@Component({
  moduleId: module.id,
  selector: 'catalogue',
  templateUrl: "professor-catalogue.component.html",
  styleUrls: ['professor-catalogue.component.css']

})
export class professorCatalogue{
  professors: professor[];
  constructor(){
    this.professors = [
      {id:0,firstname: "Fatema", lastname: "Abu Salem", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
      {id:1,firstname: "Mohammed", lastname: "Jaber", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
      {id:2,firstname: "Ahmad", lastname: "Dhaini", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"},
      {id:3,firstname: "Wassim", lastname: "El-Hajj", department: "Computer Science", image: "../app/assets/Images/defCardImage.png"}
    ]
  }
}
