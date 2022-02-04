import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
environment
@Injectable({
  providedIn: 'root'
})
export class HttpService {
BaseUrl=environment.BaseUrl;
  constructor(private http: HttpClient) { }
  
postService(url:string='',payload:any={},tokenRequired:boolean=false,httpAuthOption:any={}){
 return this.http.post(this.BaseUrl+url,payload,tokenRequired&&httpAuthOption)
}


putService(url:string='',payload:any={},tokenRequired:boolean=false,httpAuthOption:any={}){
  return this.http.put(this.BaseUrl+url,payload,tokenRequired&&httpAuthOption)


}
getService(url:string='',tokenRequired:boolean=false,httpAuthOption:any={}){
 return this.http.get(this.BaseUrl+url,tokenRequired&&httpAuthOption)

}
deleteService(url:string='',tokenRequired:boolean=false,httpAuthOption:any={}){
 return this.http.delete(this.BaseUrl+url,tokenRequired&&httpAuthOption)

}
}
