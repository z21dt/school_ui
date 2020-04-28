import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Reactive Form Module
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Radio Button
import {MatRadioModule} from '@angular/material/radio';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { HeaderComponent } from './site-components/header/header.component';
import { FooterComponent } from './site-components/footer/footer.component';
import { DashboardComponent } from './site-components/dashboard/dashboard.component';
import { NavbarComponent } from './site-components/dashboard/navbar/navbar.component';
import { TripleDateComponent } from './tools/triple-date/triple-date.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    NavbarComponent,
    TripleDateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
