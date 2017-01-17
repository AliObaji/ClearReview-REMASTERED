/**
 * Created by Lenovo on 31-Dec-16.
 */
import {Component, OnInit} from '@angular/core';
import {professor} from '../../objects/professor';

import{ProfessorListProvider} from '../../services/professor-list-provider.service';


@Component({
  moduleId: module.id,
  selector: 'catalogue',
  templateUrl: "professor-catalogue.component.html",
  styleUrls: ['professor-catalogue.component.css']

})
export class professorCatalogue implements OnInit{
  professors: professor[];
  constructor(private ProfessorListProvider:ProfessorListProvider){}
  ngOnInit(): void {
    this.getProfessors();
  }
// TODO:figure out a better way to subscribe, this works but is not recognizing it as a JSON
  private getProfessors(){
    this.ProfessorListProvider.getProfs().subscribe(p => this.professors = p.professors);
  }
}
