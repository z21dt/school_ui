import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  // apiUrl = 'http://localhost/dev/angapi/api/upload';
  apiUrl = '';

  constructor(private http: HttpClient) { }


  uploadAttachmentFile(filename: any, docType: string, studentId: number, scode: string): Observable <any> {
    // var url = "http://192.168.1.4:8080/schoolreg/registration/student/uploadFile?file="+filename +"&documentType="+ docType +"&scode="+scode+"&studentId="+studentId;
    var url = "http://192.168.1.4:8080/schoolreg/registration/student/uploadFile?file="+filename;
    console.log("Uplaod Files >>>>> ", url);
    return this.http.get<any>(url);

  }





  upload(formData) {
    console.log("UPLOADS formData >>>>", formData);
    return this.http.post<any>(`${this.apiUrl}`, formData, {
    // return this.http.post<any>(`http://192.168.1.4:8080/schoolreg/registration/student/upload_document?file=`, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event, formData)),
      catchError(this.handleError)
    );
  }

  private getEventMessage(event: HttpEvent<any>, formData) {

    switch (event.type) {
      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);
		break;
      case HttpEventType.Response:
        return this.apiResponse(event);
		break;
      default:
        return `File "${formData.get('profile').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }

}