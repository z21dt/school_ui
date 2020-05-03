import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolConfigurationService } from 'src/app/services/school-configuration.service';
import { SchoolConfig } from 'src/app/models/SchoolConfig';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.css']
})
export class StudentRegistrationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute, 
    private schoolConfigService:SchoolConfigurationService
  ){
   // this.createForm();
  }

  schoolId:string;
  
  @Input() config: SchoolConfig;


  registerForm:FormGroup;

 


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('schoolId');
      console.log('School ID ='+this.schoolId);

       this.schoolConfigService.getSchoolConfiguration(this.schoolId).subscribe(config =>{
        this.config =  config;
        console.log('School Name: '+this.config.schoolName+ ' == '+config.schoolCode);
/*
        if(config.schoolCode == 'UNKNOWN'){
            this.showMessage = true;
            console.log('showMessage: '+this.showMessage);
        }
        */
       });


    });
  }
/*
  public createForm(){
    this.registerForm = this.fb.group({
      lastname: '',
      firstname: '',
      middlename: '',
      
    });
    
  }

  public getStudentType() {
    //Get the value of your stypeControl
    return this.registerForm.controls['sType'].value;
  }

  public onSubmit(studentData){
    console.log(studentData);
    
  }
*/
}
