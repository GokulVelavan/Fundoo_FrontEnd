import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthenticationGuard } from './components/authentication.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { GetAllNotesComponent } from './components/get-all-notes/get-all-notes.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrashComponent } from './components/trash/trash.component';
const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"singup",component:SignupComponent},
  {path:"forgetPassword",component:ForgetPasswordComponent},
  {path:"resetPassword/:token",component:ResetPasswordComponent},
  {path:"dashboard",component:DashboardComponent,canActivate:[AuthenticationGuard],
  children:[
    {path:'', redirectTo:"/dashboard/notes", pathMatch:'full' },
    {path:'notes', component:GetAllNotesComponent},
    {path:'trash',component:TrashComponent},
    {path:'archive',component:ArchiveComponent}
  ]},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
