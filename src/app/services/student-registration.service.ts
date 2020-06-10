import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';
import { StudentRegStatus } from '../models/StudentRegStatus';
import { Enrollee } from '../models/Enrollee';

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
  //var url = 'https://immense-anchorage-42013.herokuapp.com/registration/student/register';
  // var url = 'http://192.168.1.4:8080/schoolreg/registration/student/register';
   var url = 'http://localhost:8080/schoolreg/registration/student/register';
    return this.http.put(url, student,httpOptions );
  }

  getRegistrationStatus(studentId:number, scode:string){
    //var url = "https://immense-anchorage-42013.herokuapp.com/registration/student/getRegistrationStatus?scode="+scode+"&studentId="+studentId;
    // var url = "http://192.168.1.4:8080/schoolreg/registration/student/getRegistrationStatus?scode="+scode+"&studentId="+studentId;
     var url = "http://localhost:8080/schoolreg/registration/student/getRegistrationStatus?scode="+scode+"&studentId="+studentId;
    return this.http.get<StudentRegStatus>(url);
  }
  
  sendStatusCheckEmail(emailAddress:string, scode:string){
    //var url =  "https://immense-anchorage-42013.herokuapp.com/registration/student/sendUserSearchEmail?scode="+scode+"&emailAddress="+emailAddress;
    // var url =  "http://192.168.1.4:8080/schoolreg/registration/student/sendUserSearchEmail?scode="+scode+"&emailAddress="+emailAddress;
     var url =  "http://localhost:8080/schoolreg/registration/student/sendUserSearchEmail?scode="+scode+"&emailAddress="+emailAddress;
    console.log("Sending email to "+url);   
    return this.http.get<string>(url);
  }
  

  enrollSimplifiedVersion(enrollee:Enrollee, scode:string){
    console.log('Enroll Na sa '+scode);
    console.log(enrollee);


    var url = 'https://salty-eyrie-44763.herokuapp.com/post_api/enroll'
    //var url = 'http://localhost:3000/post_api/enroll';
      return this.http.post(url, enrollee,httpOptions );
  }


  getEnrollees(scode:string){
     var url = 'https://immense-anchorage-42013.herokuapp.com/enrollment/student/getEnrollees?scode='+scode;
     return this.http.get<any>(url);
  }


  saveAttachmentDetails(scode:string, studentId:number, doc:string, path:string, filename:string){

      var url = 'https://salty-eyrie-44763.herokuapp.com/post_api/saveAttachment';
      return this.http.post(url, {
                                  'studentId':studentId,
                                  'docName':doc,
                                  'path':path,
                                  'schoolId':scode, 
                                  'fileName':filename
                                }   
                            ,httpOptions );
  }

  getAttachments(scode:string, studentId:number){
    var url = 'https://immense-anchorage-42013.herokuapp.com/enrollment/student/getEnrollees?scode='+scode+'/enrollment/student/getAttachmentDetails?scode='+scode+'&studentId='+studentId;
    return this.http.get<any>(url);
 }

 
  updateEnrollmentStatus(scode:string, studentId:number, enrollStatus:string, regNotes:string){

    console.log('updateEnrollmentStatus');
    var url = 'https://salty-eyrie-44763.herokuapp.com/post_api/updateEnrollmentStatus';

    var req = 
    {
      'studentId':studentId,
      'schoolId':scode, 
      'enrollmentStatus':enrollStatus,
      'regNotes':regNotes
    };
    
    console.log(req);

    return this.http.post(url, req 
                          ,httpOptions );
  }
}
