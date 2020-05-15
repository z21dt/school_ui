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
  emailResponse:string;

  @Input() config: SchoolConfig;


  ngOnInit(): void {

    this.statForm = this.fb.group({
      studentId: [null],
      emailAddress: [null],
    });



    this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('schoolId');

      console.log('School ID ='+this.schoolId);


      this.schoolConfigService.getSchoolConfiguration(this.schoolId).subscribe(config =>{
        this.config =  config;
        console.log('School Name: '+this.config.schoolName+ ' == '+config.schoolCode);

       });

    });

  }


  onSubmit(){
      
      console.log("Number "+this.statForm.get('studentId').value);
      console.log("Email address "+this.statForm.get('emailAddress').value);


      this.registrationService.getRegistrationStatus(this.statForm.get('studentId').value, this.schoolId).subscribe(regStat=> {
        this.regStatus = regStat;

        console.log(this.regStatus.studentName);


      });


  }

  sendEmail(){
    //var resp;
    console.log('Send Eamil');
    this.registrationService.sendStatusCheckEmail(this.statForm.get('emailAddress').value, this.schoolId).subscribe(res=>{
      this.emailResponse = res;
      console.log('respo '+this.emailResponse);
    });
    console.log('Sent Eamil');
  }

}
   