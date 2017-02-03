/**
 * Created by Lenovo on 17-Jan-17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {course} from '../objects/course';

import 'rxjs/Rx'

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//TODO: find elegant way to fix this
export class p{
  professors
}

@Injectable()
export class ProfessorListProvider{
  constructor(private http:Http){

  }


  getProfs():Observable<p>{
    return this.http.get('/profList')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res:Response){
    return res.json();
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
