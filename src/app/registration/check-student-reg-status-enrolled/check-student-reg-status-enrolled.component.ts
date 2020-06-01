import { Component, OnInit, Input } from '@angular/core';
import { StudentRegStatus } from 'src/app/models/StudentRegStatus';

@Component({
  selector: 'app-check-student-reg-status-enrolled',
  templateUrl: './check-student-reg-status-enrolled.component.html',
  styleUrls: ['./check-student-reg-status-enrolled.component.css']
})
export class CheckStudentRegStatusEnrolledComponent implements OnInit {

  constructor() { }
  @Input() regStatusEnrolled: StudentRegStatus;

  ngOnInit(): void {
    console.log("Check enrolled >>>>>> " + this.regStatusEnrolled);
  }

}
