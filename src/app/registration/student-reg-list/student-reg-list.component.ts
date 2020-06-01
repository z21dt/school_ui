import { Component, OnInit, Input } from '@angular/core';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';
import { EnrolleeSummaryItem } from 'src/app/models/EnrolleeSummaryItem';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-reg-list',
  templateUrl: './student-reg-list.component.html',
  styleUrls: ['./student-reg-list.component.css']
})
export class StudentRegListComponent implements OnInit {

  constructor(
    private registrationService: StudentRegistrationService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  registerForm:FormGroup;
  enrollees:EnrolleeSummaryItem[];
  @Input() schoolId:string;

  enrollee:EnrolleeSummaryItem;
  showDetails:boolean = false;
  statusOpt:string;
  attachments:any[];

  statusOptions: String[] = [ 'Pending', 'Enrolled'];

  ngOnInit(): void {
    this.createForm();
    this.getEnrollees();

  }

  public createForm(){
    this.registerForm = this.fb.group({
      newStatus: '',
      regNotes: ''
    });
    
  }

  getEnrollees(){
      this.registrationService.getEnrollees(this.schoolId).subscribe(enrolleeList =>{
          this.enrollees = enrolleeList.enrollees;

        //  console.log(this.enrollees);
      });
  }

  openEach(stud:number){
    console.log('Open '+stud);
    this.showDetails = true;


    this.enrollees.forEach(en => {
      if(en.studentId === stud ){
        this.enrollee = en;

        this.getAttachments(stud);
        this.registerForm.get('newStatus').setValue(en.status);
        this.registerForm.get('regNotes').setValue(en.regNotes);
        return;
      }
   });


  }

  goBack(){
    this.showDetails = false;

  }

  getAttachments(stud:number){
    this.registrationService.getAttachments(this.schoolId, stud).subscribe(att=>{
        this.attachments = att.attachments;
    });
  }
  updateStatus(){
    
    console.log('update status'+ this.registerForm.get('newStatus').value+' --> '+ this.registerForm.get('regNotes').value+" -->"+this.statusOpt);
    
    this.enrollee.regNotes = this.registerForm.get('regNotes').value;
    this.enrollee.status = this.registerForm.get('newStatus').value;
    this.registrationService.updateEnrollmentStatus(this.schoolId, this.enrollee.studentId, this.registerForm.get('newStatus').value,this.registerForm.get('regNotes').value ).subscribe(result=>{
        console.log(result);
    });

  }
  
  
}
