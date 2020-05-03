import { Component, OnInit, Input } from '@angular/core';
import { SchoolConfig } from 'src/app/models/SchoolConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input('school') config:SchoolConfig; 

  ngOnInit(): void {
  }

}
