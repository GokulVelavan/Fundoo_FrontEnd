import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
constructor(private formBuilder: FormBuilder,private route:Router,private userService:UserService ) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
    });
}
  register(){
    if(this.registerForm.valid){
var reqData={
  firstName: this.registerForm.value.firstName,
  lasttName: this.registerForm.value.lastName,
  email:  this.registerForm.value.email,
  password: this.registerForm.value. password,
}
  
      this.userService.userRegistration(reqData).subscribe((result:any)=>{
        console.log(result);
        
      })
    }else{
console.log("dc")
    }
  }

}
