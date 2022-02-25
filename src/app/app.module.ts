import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { Contentsection1Component } from './components/contentsection1/contentsection1.component';

import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileformComponent } from './components/profileform/profileform.component';
import { CompanyformComponent } from './components/companyform/companyform.component';
import { CompanypageComponent } from './components/companypage/companypage.component';
import { ProfilepageComponent } from './components/profilepage/profilepage.component';
import { ResumeformComponent } from './components/resumeform/resumeform.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    Contentsection1Component,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    ProfileformComponent,
    CompanyformComponent,
    CompanypageComponent,
    ProfilepageComponent,
    ResumeformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
