import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './site-components/landing-page/landing-page.component';
import { StudentRegistrationComponent } from './registration/student-registration/student-registration.component';


const routes: Routes = [

  {path:'', component:LandingPageComponent},
  {path:':schoolId/registration', component:StudentRegistrationComponent}
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
