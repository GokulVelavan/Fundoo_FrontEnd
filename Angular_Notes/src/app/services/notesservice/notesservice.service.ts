import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotesserviceService {
  constructor(private httpService:HttpService) { }

  changecolor(reqData:any,token:any,id:any)
  {
    console.log(reqData);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: 'Bearer '+token,
        
      })
    };
   return this.httpService.putService('/Notes/Color?Id='+id,reqData,true,httpOptions);
  }
}
