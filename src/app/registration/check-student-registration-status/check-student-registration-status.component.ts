import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolConfigurationService } from 'src/app/services/school-configuration.service';
import { SchoolConfig } from 'src/app/models/SchoolConfig';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';
import { StudentRegStatus } from 'src/app/models/StudentRegStatus';


@Component({
  selector: 'app-check-student-registration-status',
  templateUrl: './check-student-registration-status.component.html',
  styleUrls: ['./check-student-registration-status.component.css']
})
export class CheckStudentRegistrationStatusComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private schoolConfigService:SchoolConfigurationService,
    private registrationService: StudentRegistrationService

  ) { }

  statForm:FormGroup;

  @Input() regStatus: StudentRegStatus;

  schoolId:string;
  studentId:string;
  emailResponse:string;
  hideEmailResponse: boolean = true;
  hideInfo: boolean;
  hidePending: boolean;
  hideEnrolled: boolean;
  hideForgetPass: boolean;
  @Input() dataBindStatus: StudentRegStatus;

  @Input() config: SchoolConfig;


  ngOnInit(): void {
    this.hideInfo = false;
    this.hidePending = true;
    this.hideEnrolled = true;
    this.hideForgetPass = true;

    this.statForm = this.fb.group({
      studentId: [null],
      emailAddress: [null],
    });



    this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('schoolId');
      this.studentId  =  params.get('studentId');

      console.log('School ID ='+this.schoolId+" ");
      console.log('studentId ID ='+this.studentId+" ");
      this.statForm.get('studentId').setValue(this.studentId);

      this.schoolConfigService.getSchoolConfiguration(this.schoolId).subscribe(config =>{
        this.config =  config;
        console.log('School Name: '+this.config.schoolName+ ' == '+config.schoolCode);
       });

       if(this.studentId != null){
          this.onSubmit();
       }
    });

  }


  onSubmit(){
      
      console.log("Number "+this.statForm.get('studentId').value);
      console.log("Email address "+this.statForm.get('emailAddress').value);

      this.registrationService.getRegistrationStatus(this.statForm.get('studentId').value, this.schoolId).subscribe(regStat=> {
        this.regStatus = regStat;

        console.log(regStat);
        this.dataBindStatus = this.regStatus;

        if(this.regStatus && this.regStatus !== null &&
          this.regStatus.enrollmentStatus &&
          this.regStatus.enrollmentStatus === 'Pending'){
            console.log("Sulod sa if elsse > " +this.regStatus.enrollmentStatus);
            this.hideEnrolled = true;
            this.hidePending = false;
            this.hideInfo = true;
            this.hideForgetPass = true;
        }else if(this.regStatus && this.regStatus !== null &&
          this.regStatus.enrollmentStatus &&
          this.regStatus.enrollmentStatus === 'Enrolled') {
            this.hidePending = true;
            this.hideEnrolled = false;
        } else {
          this.hideInfo = this.hideInfo;
        }
        

        console.log(this.regStatus.studentName);


      });


  }

  sendEmail(){
    //var resp;
    console.log('Send Eamil');
    this.hideEmailResponse = !this.hideEmailResponse;
    this.registrationService.sendStatusCheckEmail(this.statForm.get('emailAddress').value, this.schoolId).subscribe(res=>{
      this.emailResponse = res;

      if(this.emailResponse){
        this.hideEmailResponse = !this.hideEmailResponse;
      }
      console.log('respo '+this.emailResponse);

    });
    console.log('Sent Eamil');
  }

  forgetUserId() {
    this.hideForgetPass = !this.hideForgetPass;
    this.hideInfo = true;
  }

}
   