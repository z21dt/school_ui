import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';
import { StudentRegStatus } from '../models/StudentRegStatus';

const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type':'application/json', 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Expose-Headers': '*',
    'Access-Control-Allow-Methods': 'POST'
    }
  )
}

@Injectable({ 
  providedIn: 'root'
})
export class StudentRegistrationService {


  constructor(private http:HttpClient) { }

  registerOldStudent(student:Student): Observable<any>{

    console.log('Register Old Student '+student.firstName); 
    console.log('Register Old Student '+student.middleName); 
    console.log('Register Old Student '+student.lastName); 
  
    //https://immense-anchorage-42013.herokuapp.com/
  /*
    
    ///var url = 'https://immense-anchorage-42013.herokuapp.com/registration/student/registerOld?firstName='+student.firstName+"&lastName="+student.lastName+"&middleName="+student.middleName+'&birthDate=1978-01-01';     
    var url = 'http://localhost:8080/schoolreg/registration/student/registerOld?firstName='+student.firstName+"&lastName="+student.lastName+"&middleName="+student.middleName+'&birthDate=1978-01-01';
  
     console.log("URL "+url)
    return this.http.get<Student>(url);
*/

   console.log('Sending Postsss');
  var url = 'http://localhost:8080/schoolreg/registration/student/register';
    return this.http.put(url, student,httpOptions );
  }

  getRegistrationStatus(studentId:number, scode:string){
    var url = "http://localhost:8080/schoolreg/registration/student/getRegistrationStatus?scode="+scode+"&studentId="+studentId;
    return this.http.get<StudentRegStatus>(url);
  }
  
  sendStatusCheckEmail(emailAddress:string, scode:string){
    var url =  "http://localhost:8080/schoolreg/registration/student/sendUserSearchEmail?scode="+scode+"&emailAddress="+emailAddress;
    console.log("Sending email to "+url);   
    return this.http.get<string>(url);
  }
  
}
