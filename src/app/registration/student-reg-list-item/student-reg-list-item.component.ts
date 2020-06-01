import { Component, OnInit, Input } from '@angular/core';
import { EnrolleeSummaryItem } from 'src/app/models/EnrolleeSummaryItem';
import { StudentRegStatus } from 'src/app/models/StudentRegStatus';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-reg-list-item',
  templateUrl: './student-reg-list-item.component.html',
  styleUrls: ['./student-reg-list-item.component.css']
})
export class StudentRegListItemComponent implements OnInit {

  constructor(
    private registrationService: StudentRegistrationService,
    private route: ActivatedRoute
  ) { }

  studentId:number;
  schoolId:string;
 

  ngOnInit(): void {

    /*

    this.route.paramMap.subscribe(params => {

      this.schoolId = params.get('schoolId');
      this.studentId = +params.get('studentId');

      this.registrationService.getRegistrationStatus(this.studentId , this.schoolId).subscribe(regStat=>{

        this.regStatus = regStat;

        console.log(regStat);
      });
 
    });

    */

  }

}
