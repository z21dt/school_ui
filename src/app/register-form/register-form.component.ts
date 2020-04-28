import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;
  
  searchTypeSelected: string;
  studentTypes: string[] = ['Returning Student', 'New Student/Transferee'];

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
    
  }

  public createForm(){
    this.registerForm = this.fb.group({
      sType: [null]
    });
    
  }

  public getStudentType() {
    //Get the value of your stypeControl
    return this.registerForm.controls['sType'].value;
  }

  

}
