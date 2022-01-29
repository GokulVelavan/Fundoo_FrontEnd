import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  submitted = false;
  token:any;
  constructor(private formBuilder: FormBuilder,private activateRoute:ActivatedRoute,private userService:UserService) { }
  ngOnInit() {
    this.resetPasswordForm = this.formBuilder.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
    });
    this.token= this.activateRoute.snapshot.paramMap.get('token'); // allParams is an object
}
  reset(){
    if(this.resetPasswordForm.valid)
  console.log(this.resetPasswordForm.value);
  var reqData={
    newPassword:this.resetPasswordForm.value.password,
    confirmPassword: this.resetPasswordForm.value.confirmPassword,
  }
  this.userService.resetPassword(reqData,this.token).subscribe((result:any)=>{
    console.log(result);
  })
  }
}
