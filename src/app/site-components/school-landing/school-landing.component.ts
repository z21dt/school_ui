import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolConfigurationService } from 'src/app/services/school-configuration.service';
import { SchoolConfig } from 'src/app/models/SchoolConfig';

@Component({
  selector: 'app-school-landing',
  templateUrl: './school-landing.component.html',
  styleUrls: ['./school-landing.component.css']
})
export class SchoolLandingComponent implements OnInit {

  constructor(

    private route: ActivatedRoute, 
    private schoolConfigService:SchoolConfigurationService

  ) { }


  @Input() config: SchoolConfig;

  schoolId: string;

  ngOnInit(): void {


    this.route.paramMap.subscribe(params => {
      this.schoolId = params.get('schoolId');

      console.log('School ID ='+this.schoolId);


      this.schoolConfigService.getSchoolConfiguration(this.schoolId).subscribe(config =>{
        this.config =  config;
        console.log('School Name: '+this.config.schoolName+ ' == '+config.schoolCode);




       });

  

    });

  }

}
