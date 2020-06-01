import { Component, OnInit, Input, Output } from '@angular/core';
import { StudentRegStatus } from 'src/app/models/StudentRegStatus';
import { FileUploaderServiceService } from 'src/app/services/file-uploader-service.service';
import { HttpClient } from '@angular/common/http';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';

@Component({
  selector: 'app-check-student-reg-status-pending',
  templateUrl: './check-student-reg-status-pending.component.html',
  styleUrls: ['./check-student-reg-status-pending.component.css']
})
export class CheckStudentRegStatusPendingComponent implements OnInit {


  constructor(
    private fileUploadService: FileUploaderServiceService,
    private http: HttpClient,
    private registrationService: StudentRegistrationService

  ) { }
  @Input() regStatusPending: StudentRegStatus;
  @Input() getStatus: string;
  @Input() schoolId:string;
  
  selectedFile:File  = null;
  
  isFileUploaded:boolean =false;
  attachemts:any[];


  ngOnInit(): void {
    console.log('SchoolId='+this.schoolId);
    console.log("Check pending >>>>>> " + this.regStatusPending);

    this.registrationService.getAttachments(this.schoolId, this.regStatusPending.studentId).subscribe(att =>{
        this.attachemts = att.attachments;

        console.log('att length=>'+this.attachemts.length);
        if(this.attachemts.length > 0){
            this.isFileUploaded = true;
        }
        
        console.log(this.attachemts);
    });

  }


  onFileSelected(event)
  {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
  }

  
  isPending(): boolean {
    return this.regStatusPending.enrollmentStatus === 'Pending';
  }
 

  onUpload(){
    console.log(this.selectedFile);    

    const fd = new FormData();
    fd.append('filetoupload',this.selectedFile, this.selectedFile.name);

    var url = 'http://localhost:3000/fileupload/'+this.schoolId+'/'+this.regStatusPending.studentId+'/payment_receipt';


    this.http.post(url, fd, {responseType: 'text'}).subscribe(res => {

      if(res === 'ok'){
        this.isFileUploaded = true;
      }
      if(res != null){
        this.isFileUploaded = true;
      }

      console.log('respo '+res);

      
      this.registrationService.saveAttachmentDetails(this.schoolId, this.regStatusPending.studentId, 'payment_receipt',res, this.regStatusPending.studentId+'-payment_receipt' ).subscribe(att=>{
        console.log(att);
      }); 

    });

 

/*
 

    this.fileUploadService.uploadFile('slra', this.regStatusPending.studentId, 'depositSlip', fd).subscribe(message=>{

      console.log('respo '+message);

    });
  */  
  }
 
}
