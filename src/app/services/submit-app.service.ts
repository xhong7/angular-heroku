import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_path = 'https://g13jobapi.herokuapp.com/api/auth/login';
const api_path2='https://g13jobapi.herokuapp.com/api/auth/register';

@Injectable({
  providedIn: 'root'
})
export class SubmitAppService {
email_address:String;
  constructor(private http: HttpClient){ }

  submit_app_form(data:any) : Observable<any>
  {
    return this.http.post<any>(api_path,data);
  }
  register_app_form(data:any):Observable<any>{
    return this.http.post<any>(api_path2,data);
  }
  
}
