import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import "~@angular/material/prebuilt-themes/indigo-pink.css";
import {MatFormFieldModule,MatFormFieldControl}from "@angular/material/form-field"
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon'
import {ThemePalette} from '@angular/material/core';
import {Component} from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormControl, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatInputModule,MatIconModule,MatCheckboxModule,MatButtonModule//FormControl, Validators//
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
