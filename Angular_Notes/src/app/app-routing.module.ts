import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"singup",component:SignupComponent},
  {path:"forgetPassword",component:ForgetPasswordComponent},
  {path:"resetPassword/:token",component:ResetPasswordComponent},
  {path:"dashboard/:token",component:DashboardComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
