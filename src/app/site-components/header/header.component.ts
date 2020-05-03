import { Component, OnInit, Input } from '@angular/core';
import { SchoolConfig } from 'src/app/models/SchoolConfig';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  @Input('school') config:SchoolConfig; 

  
  ngOnInit(): void {
    console.log("Logo file name = "+this.config.schoolCode+"_logo.png");
  }

}
