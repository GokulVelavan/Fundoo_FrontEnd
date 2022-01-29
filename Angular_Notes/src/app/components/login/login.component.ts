import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
constructor(private formBuilder: FormBuilder,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
}
login(){
if(this.loginForm.valid){
  var reqData={
    email:  this.loginForm.value.email,
    password: this.loginForm.value. password,
  }
  this.userService.userLogin(reqData).subscribe((result:any)=>{
    localStorage.setItem("token",result._token);
    console.log(result);
    this.router.navigate(['/dashboard/'+result._token])
  },err=>console.log(err))
}
}
}

