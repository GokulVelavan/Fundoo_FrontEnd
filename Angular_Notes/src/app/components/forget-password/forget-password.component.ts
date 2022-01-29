import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit() {
    this.forgetPasswordForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
    });
}

forgetPassword()
{
  if(this.forgetPasswordForm.valid)
  console.log("");
  var reqData={
    email:  this.forgetPasswordForm.value.email,
  }
  this.userService.forgetPassword(reqData).subscribe((result:any)=>{
    console.log(result);
  })
}
}
