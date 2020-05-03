import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Student } from 'src/app/models/Student';
import {StudentRegistrationService} from 'src/app/services/student-registration.service';

@Component({
  selector: 'app-student-registration-form',
  templateUrl: './student-registration-form.component.html',
  styleUrls: ['./student-registration-form.component.css']
})
export class StudentRegistrationFormComponent implements OnInit {


  registerForm:FormGroup;
  
  searchTypeSelected: string;
  studentTypes: string[] = ['Returning Student', 'New Student/Transferee'];

  student:Student;


  

  constructor(  private fb: FormBuilder,
                private registrationService: StudentRegistrationService
    ) { 

      this.createForm();
  }

  ngOnInit(): void {
    
  }

  public createForm(){
    this.registerForm = this.fb.group({
      sType: [null],
      lastname: '',
      firstname: '',
      extensionname: '',
      middlename: '',
      emailaddress: '',
      phonenumber: '', 
      lrn: '',  
    });
    
  }

  public getStudentType() {
    //Get the value of your stypeControl
    return this.registerForm.controls['sType'].value;
  }

    onSubmit() {
      
      console.log("Old ");
     // console.log(this.lastName);
      console.log(this.registerForm.value);

      this.student = {
        firstName:this.registerForm.get('firstname').value,
        lastName:this.registerForm.get('lastname').value,
        middleName:this.registerForm.get('middlename').value
      }

      console.log('student '+this.student);
      console.log('student .fistname '+this.student.firstName); 


      this.registrationService.registerOldStudent(this.student).subscribe(student => {
        this.student = student;
      });

/*
    this.student =  {
      firstName:this.firstName,
      lastName:this.lastName,
      middleName:this.middleName
    }
/*
    this.registrationService.registerNewStudent(this.student).subscribe(student => {
      this.student = student;
    });


    this.registrationService.registerOldStudent(this.student).subscribe(student => {
      this.student = student;
    });
      */  
  }

}
