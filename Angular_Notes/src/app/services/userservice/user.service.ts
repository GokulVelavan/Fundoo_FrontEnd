import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private httpService:HttpService) { }
  userRegistration(reqData: { firstName: any; lasttName: any; email: any; password: any;})
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
        
      })
    };
   return this.httpService.postService('/User',reqData,false,httpOptions);
  }
  userLogin(reqData: { email: any; password: any; })
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
      })
    };
    return this.httpService.postService('/User/Login',reqData,false,httpOptions);
  }
  forgetPassword(reqData: { email: any; })
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'my-auth-token',
      })
    };
    return this.httpService.postService('/User/ForgetPassword',reqData,false,httpOptions); 
  }
  resetPassword(reqData: { newPassword: any; confirmPassword: any; },token: any)
  {
    console.log(reqData,token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token,
      })
    };
    console.log(reqData,httpOptions);
    return this.httpService.postService('/User/ResetPassword',reqData,true,httpOptions); 
  }
  sendNotes(reqData: { title: any; message: any;},token: any)
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token,
        
      })
    };
    console.log(reqData,httpOptions);
    return this.httpService.postService('/Notes',reqData,true,httpOptions); 
  }

  getNotes(token: any){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token,
        
      })
    };
    console.log("somthing");
    return this.httpService.getService('/Notes',true,httpOptions); 
  }
}
