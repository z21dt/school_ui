import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Reactive Form Module
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Radio Button
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';



//import { RegisterFormComponent } from './register-form/register-form.component';

import { HeaderComponent } from './site-components/header/header.component';
import { FooterComponent } from './site-components/footer/footer.component';
import { DashboardComponent } from './site-components/dashboard/dashboard.component';
import { NavbarComponent } from './site-components/dashboard/navbar/navbar.component';
import { TripleDateComponent } from './tools/triple-date/triple-date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './site-components/landing-page/landing-page.component';
import { StudentRegistrationComponent } from './registration/student-registration/student-registration.component';
import { StudentListComponent } from './reports/student-list/student-list.component';
import { StudentRegistrationFormComponent } from './registration/student-registration-form/student-registration-form.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentRegistrationStatusComponent } from './registration/student-registration-status/student-registration-status.component';
import { CheckStudentRegistrationStatusComponent } from './registration/check-student-registration-status/check-student-registration-status.component';
import { SchoolLandingComponent } from './site-components/school-landing/school-landing.component';
import { CheckStudentRegStatusPendingComponent } from './registration/check-student-reg-status-pending/check-student-reg-status-pending.component';
import { CheckStudentRegStatusEnrolledComponent } from './registration/check-student-reg-status-enrolled/check-student-reg-status-enrolled.component';
import { UploadComponent } from './upload/upload.component';
import { from } from 'rxjs';
import { SimplifiedRegFormComponent } from './simplifiedReg/simplified-reg-form/simplified-reg-form.component';
import { PaypalPaymentFormComponent } from './registration/paypal-payment-form/paypal-payment-form.component';
import { StudentRegListComponent } from './registration/student-reg-list/student-reg-list.component';
import { StudentRegListItemComponent } from './registration/student-reg-list-item/student-reg-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    //RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NavbarComponent,
    TripleDateComponent,
    LandingPageComponent,
    StudentRegistrationComponent,
    StudentListComponent,
    StudentRegistrationFormComponent,
    StudentRegistrationStatusComponent,
    CheckStudentRegistrationStatusComponent,
    SchoolLandingComponent,
    CheckStudentRegStatusPendingComponent,
    CheckStudentRegStatusEnrolledComponent,
    UploadComponent,
    SimplifiedRegFormComponent,
    PaypalPaymentFormComponent,
    StudentRegListComponent,
    StudentRegListItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
