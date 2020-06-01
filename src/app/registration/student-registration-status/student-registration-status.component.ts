import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolConfigurationService } from 'src/app/services/school-configuration.service';
import { SchoolConfig } from 'src/app/models/SchoolConfig';
import { StudentRegStatus } from 'src/app/models/StudentRegStatus';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-registration-status',
  templateUrl: './student-registration-status.component.html',
  styleUrls: ['./student-registration-status.component.css']
})
export class StudentRegistrationStatusComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private schoolConfigService:SchoolConfigurationService,
    private registrationService: StudentRegistrationService

  ) { }

 
  schoolId:string;
  studentId:number;
  regcode:string;

  @Input() config: SchoolConfig;
  @Input() regStatus: StudentRegStatus;



  isEmptyObject(obj) {
    return (obj && (Object.keys(obj).length === 0));
  }

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.regcode = params.get('regcode');
      console.log('regcode = '+this.regcode);

      this.schoolId = params.get('schoolId');
      this.studentId = +params.get('studentId');

      console.log('School ID ='+this.schoolId);
      console.log('studentId ==> '+this.studentId);


      this.schoolConfigService.getSchoolConfiguration(this.schoolId).subscribe(config =>{
        this.config =  config;
        console.log('School Name: '+this.config.schoolName+ ' == '+config.schoolCode);




       });

       this.registrationService.getRegistrationStatus(this.studentId, this.schoolId).subscribe(regStat=> {
        this.regStatus = regStat;

        console.log(this.regStatus.studentName);




      });


    });

  }

}
