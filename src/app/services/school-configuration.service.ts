import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { SchoolConfig } from '../models/SchoolConfig';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SchoolConfigurationService {

  constructor(private http:HttpClient) { }

  schoolConfig:SchoolConfig;

   getSchoolConfiguration (schoolId:string) :Observable<SchoolConfig> {
   
      console.log('School ID '+schoolId);
      return this.http.get<SchoolConfig>("https://immense-anchorage-42013.herokuapp.com/admin/schools/getSchoolConfig?schoolId="+schoolId);

  }
}


