import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './site-components/landing-page/landing-page.component';
import { StudentRegistrationComponent } from './registration/student-registration/student-registration.component';
import { StudentRegistrationStatusComponent } from './registration/student-registration-status/student-registration-status.component';
import { CheckStudentRegistrationStatusComponent } from './registration/check-student-registration-status/check-student-registration-status.component';
import { SchoolLandingComponent } from './site-components/school-landing/school-landing.component';


const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:':schoolId/into', component:SchoolLandingComponent},
  {path:':schoolId/registration', component:StudentRegistrationComponent},
  {path:':schoolId/registration/status/:studentId', component:StudentRegistrationStatusComponent},
  {path:':schoolId/registration/checkStatus', component:CheckStudentRegistrationStatusComponent}

    /*
  {path:'', component:RegistrationComponent},
  {path:'about', component:AboutComponent},
  {path:'schoolsys/:schoolId', component:SchoolLandingPageComponent},
  {path:'schoolsys/:schoolId/registration', component:StudentRegistrationComponent} 
*/
];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
}) 
export class AppRoutingModule { }
