import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms' ; 
import { FileUploadService } from 'src/app/services/file-upload.service';
import { StudentRegStatus } from '../models/StudentRegStatus';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  @Input() studentFormInfo: StudentRegStatus;
  error: string;
  schoolId:any;
  fileName: Object;

  profileForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private fileUploadService :FileUploadService) { }

  fileUpload = {status: '', message: '', filePath: ''};
  

  ngOnInit() {
    this.profileForm = this.fb.group({
      name_nso: [''],
      profile_nso: [''],
      name_deposit: [''],
      profile_deposit: ['']
    });

    this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('schoolId');

      console.log('School ID ='+this.schoolId);
    });
  }

  onSelectFileNSO(event){
    console.log(event.target.files);
    if(event.target.files.length > 0) {
      const profile = event.target.files[0];
      console.log(profile);
      this.fileName = profile;
      this.profileForm.get('profile_nso').setValue(profile);
      this.profileForm.get('name_nso').setValue(profile.name);
    }
  }

  onSelectFileDeposit(event){
    console.log("File Target please >>" ,event.target.files);

    if(event.target.files.length > 0) {
      const profile = event.target.files[0];
      console.log(profile);
      this.profileForm.get('profile_deposit').setValue(profile);
      this.profileForm.get('name_deposit').setValue(profile.name);
    }
  }

  onSubmit(){
    const formData = new FormData();
    formData.append('name_nso', this.profileForm.get('name_nso').value);
    formData.append('profile_nso', this.profileForm.get('profile_nso').value);
    // formData.append('name_deposit', this.profileForm.get('name_deposit').value);
    // formData.append('profile_deposit', this.profileForm.get('profile_deposit').value);
    console.log('HITS! >>>>',  this.profileForm.value);
    console.log(this.studentFormInfo);

    // this.fileUploadService.uploadAttachmentFile(formData ,
    //   this.profileForm.value.profile_nso.type, this.studentFormInfo.studentId,
    //   this.schoolId ).subscribe(res => {
    //     console.log("response uploadAttachment >>> ", res);
    //   });



    this.fileUploadService.uploadAttachmentFile( this.profileForm.value.name_nso , '' , null , '').subscribe(res => {
        console.log("response uploadAttachment >>> ", res);
      });

    this.fileUploadService.upload(formData).subscribe(
      res => this.fileUpload = res,
      err => this.error = err
    );



  }

}
