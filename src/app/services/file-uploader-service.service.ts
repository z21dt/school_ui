import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Student } from '../models/Student';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders(
    {
    'Content-Type':'multipart/form-data', 
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



export class FileUploaderServiceService {

  constructor(private http:HttpClient) { }


  uploadFile(scode:string, studentid:number, docref:string, filetoupload:FormData){
    var url = 'http://localhost:3000/fileupload/'+scode+'/'+studentid+'/'+docref;

    console.log("File upload "+url);
  
    return this.http.post(url, filetoupload );
  }

}



