import { Component, OnInit, Input } from '@angular/core';
import { SchoolConfig } from 'src/app/models/SchoolConfig';
import { SchoolConfigurationService } from 'src/app/services/school-configuration.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Enrollee } from 'src/app/models/Enrollee';
import { MatRadioChange } from '@angular/material/radio';
import { StudentRegistrationService } from 'src/app/services/student-registration.service';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-simplified-reg-form',
  templateUrl: './simplified-reg-form.component.html',
  styleUrls: ['./simplified-reg-form.component.css']
})
export class SimplifiedRegFormComponent implements OnInit {

  constructor(
    private schoolConfigService:SchoolConfigurationService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private registrationService:StudentRegistrationService
  )
   { 

    this.createForm();
   }

  registerForm:FormGroup;
  schoolId:string;
  studentTypes: string[] = ['Returning Student', 'New Student / Transferee'];
  confirmationMessage:string;
  enrolee:Enrollee;

  hideInputFields:boolean = false;
  hasValidationIssue:boolean = false;
  validationMessage:string;

  hideNewStudentFields:boolean = true;
  
  student:Student;

  testing:boolean = false;

  hidePaymentPanel:boolean = true;
  hideConfirmationPanel:boolean = true;

  paymentInstruction:string;
  paymentSelected:string;

  gender: String[] = [
   'Male', 'Female'
  ];
  gradeLevel: String[] = [
    'Pre-Kinder', 'Kinder',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10'
  ];


  @Input() config: SchoolConfig;


  public createForm(){
    this.registerForm = this.fb.group({
      sType: [null],
      firstName: '',
      middleName: '',
      lastName: '',
      studGender: [null],  
      birthDay: '',
      gradeLevel:'',
      lastSchool:'',
      lastSchoolAddress:'',
      parentName:'',
      address:'',
      contactNumber:'',
      emailAddress:'',
      verEmailAddress:'',
      notes:'',
      paymentOption:''
      
    });
    
  }


    ngOnInit(){
    


      this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('schoolId');
      console.log('School ID ='+this.schoolId);

      this.schoolConfigService.getSchoolConfiguration(this.schoolId).subscribe(config =>{
        this.config =  config;
        console.log('School Name: '+this.config.schoolName+ ' == '+config.schoolCode);
      })

      this.registerForm.get('sType').setValue('Returning Student');
      this.registerForm.get('studGender').setValue('Male');
      this.registerForm.get('paymentOption').setValue('otc');

    });
  }


  setupStudentType(){
    //return this.registerForm.controls['sType'].value;

    console.log('hide show some');
  }

  onSubmit(){
    this.enrolee = {
      studentType:this.registerForm.get('sType').value,
      firstName:this.registerForm.get('firstName').value,
      middleName:this.registerForm.get('middleName').value,
      lastName:this.registerForm.get('lastName').value,
  
      gender:this.registerForm.get('studGender').value,
      birthDay:this.registerForm.get('birthDay').value,
      gradeLevel:this.registerForm.get('gradeLevel').value,
      lastSchoolAttended:this.registerForm.get('lastSchool').value,
      lastSchoolAddress:this.registerForm.get('lastSchoolAddress').value,
  
  
      parentsName:this.registerForm.get('parentName').value,
      address:this.registerForm.get('address').value,
      contactNumber:this.registerForm.get('contactNumber').value,
      emailAddress:this.registerForm.get('emailAddress').value,
      notes:this.registerForm.get('notes').value,
      enrollmentStatus:'NEW',
      schoolId:this.schoolId,
      paymentSelected:this.paymentSelected

    };

    console.log( this.enrolee );
    console.log(this.enrolee.firstName.length );
    
    this.hasValidationIssue = false;
  

    

    if(this.enrolee.firstName.length == 0){
      this.validationMessage = "Please fillup First Name";
      this.hasValidationIssue = true;
      return;
    }

    if(this.enrolee.lastName.length == 0){
      this.validationMessage = "Please fillup Last Name";
      this.hasValidationIssue = true;
      return;
    }
    
    if(this.enrolee.birthDay.length == 0){
      this.validationMessage = "Please fillup Birth Date";
      this.hasValidationIssue = true;
      return;
    }


    if(!this.hideNewStudentFields ){

      if(this.enrolee.lastSchoolAttended.length == 0){
        this.validationMessage = "Please fillup the last school attended";
        this.hasValidationIssue = true;
        return;
      }

    if(this.enrolee.lastSchoolAddress.length == 0){
      this.validationMessage = "Please fillup the school address";
      this.hasValidationIssue = true;
      return;
    }
  }


    if(this.enrolee.parentsName.length == 0){
      this.validationMessage = "Please fillup Guardian / Parent's Name";
      this.hasValidationIssue = true;
      return;
    }


    if(this.enrolee.contactNumber.length == 0){
      this.validationMessage = "Please fillup Contact Number";
      this.hasValidationIssue = true;
      return;
    }

 

    if(this.enrolee.emailAddress.length == 0){
      this.validationMessage = "Please fillup Email Address";
      this.hasValidationIssue = true;
      return;
    }


    if(this.enrolee.emailAddress != this.registerForm.get('verEmailAddress').value){
      this.validationMessage = "Your email address did match. Please check the Email Addess and Verify Email Address data.";
      this.hasValidationIssue = true;
      return;
    }

    
    
    if(!this.hasValidationIssue){

      this.hideInputFields = true;
      this.hidePaymentPanel=false;
/*
        this.registrationService.enrollSimplifiedVersion( this.enrolee, this.schoolId).subscribe(student =>{
          console.log('Student information ');
          console.log(student);
        })
      
        */

    }
  

  } 

  test(){
    console.log('test');
  }

  goBack(){

    console.log('goBack');
    this.hideInputFields = false;
    this.hasValidationIssue = false;

    this.registerForm.get('firstName').setValue('');
    this.registerForm.get('birthDay').setValue('');

    this.hidePaymentPanel = true;
    this.hideConfirmationPanel = true;

    return false;
  }


  continuePayment(){

    
    this.hidePaymentPanel = true; 
    this.hideConfirmationPanel = false;
    this.hidePaymentPanel = true;

    console.log('Payment option= ' +this.registerForm.get('paymentOption').value);

    this.paymentSelected = this.registerForm.get('paymentOption').value;
    this.enrolee.paymentSelected =  this.paymentSelected;


    console.log('Eroll Student');
    console.log(this.enrolee);

    
    this.registrationService.enrollSimplifiedVersion( this.enrolee, this.schoolId).subscribe(student =>{
          console.log('Student information ');
          console.log(student);
     })
      

 
    return false;

  }


  payOTC(): boolean {
    return this.paymentSelected === 'otc';
  }
  payPadala(): boolean {
    return this.paymentSelected === 'padala';
  }
  payPal(): boolean {
    return this.paymentSelected === 'paypal';
  } 
  payBank(): boolean {
    return this.paymentSelected === 'bank';
  }
  payCard(): boolean {
    return this.paymentSelected === 'card';
  }

  typeRadioChange($event: MatRadioChange){

    console.log($event.source.name, $event.value);

    if ($event.source.name === 'mat-radio-group-0' ) {
      this.hideNewStudentFields = $event.value ==='Returning Student';
  }
    console.log('Change');
  }

}
