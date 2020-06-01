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
  gradeLevel: String[] = [
    'Kindergarten 1', 'Kindergarten 2',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10',
    'Junior High', 'Senior High'
  ];
  gender: String[] = [
    'Female', 'Male'
  ];
  nationality: String[] = ['Pinoy', 'Kano', 'Intsik']
  student:Student;
  fileName: Object;
  newStud_BasicInfo_Form1: boolean;
  newStud_FamilyInfo_Form2: boolean;
  newStud_RequiredDoc_Form3: boolean;


  

  constructor(  private fb: FormBuilder,
                private registrationService: StudentRegistrationService
    ) { 

      this.createForm();
  }

  ngOnInit(): void {
    this.newStud_BasicInfo_Form1 = true;
    this.newStud_FamilyInfo_Form2 = false;
    this.newStud_RequiredDoc_Form3 = false;
  }

  public createForm(){
    this.registerForm = this.fb.group({
      sType: [null],
      completeName: '',
      birthday: '',
      schoolPicture: '',
      schoolPictureID: '',
      schoolIDNumber: '',
      emailaddress: '',
      phonenumber: '', 
      lrn: '',  
      newStudCompleteName: '',  
      newStudEmailaddress: '',  
      newStudphonenumber: '',  
      newStudgradeLevel: '',  
      newStudGender: [null],  
      newStudlrn: '',  
      newStudBirthday: '',  
      newStudNationality: '',  
      newStudMailingAd: '',  
      newStudFathersName: '',  
      newStudFathersOccupation: '',  
      newStudFathersphonenumber: '',  
      newStudFathersMailingAd: '',  
      newStudMothersName: '',  
      newStudMothersOccupation: '',  
      newStudMothersphonenumber: '',  
      newStudMothersEmailAdd: '',  
      newStudMothersMailingAd: '',  
      newStudGuardiansName: '',  
      newStudGuardiansOccupation: '',  
      newStudGuardiansphonenumber: '',  
      newGuardiansEmailAdd: '',  
      newStudGuardiansMailingAd: '',
      rd1_name: [''],
      rd1_file: [''],
      rd2_name: [''],
      rd2_file: [''],
      rd3_name: [''],
      rd3_file: [''],
      rd4_name: [''],
      rd4_file: [''],


      
    });
    
  }

  public getStudentType() {
    //Get the value of your stypeControl
    return this.registerForm.controls['sType'].value;
  }

  onSelectSchoolIDPic(event){
    console.log(event.target.files);
    if(event.target.files.length > 0) {
      const profile = event.target.files[0];
      console.log(profile);
      this.fileName = profile;
      this.registerForm.get('schoolPicture').setValue(profile);
      this.registerForm.get('schoolPictureID').setValue(profile.name);
    }
  }

  newStudBasicInfoContinue() {
    this.newStud_BasicInfo_Form1 = false;
    this.newStud_FamilyInfo_Form2 = true;
    this.newStud_RequiredDoc_Form3 = false;
  }

  newStudFamilyInfoContinue() {
    this.newStud_BasicInfo_Form1 = false;
    this.newStud_FamilyInfo_Form2 = false;
    this.newStud_RequiredDoc_Form3 = true;
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
