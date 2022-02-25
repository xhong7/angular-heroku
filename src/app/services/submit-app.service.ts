import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_path = 'https://secret-castle-85858.herokuapp.com/api/auth/login';
const api_path2='https://secret-castle-85858.herokuapp.com/api/auth/register';
let api_path3 = 'https://secret-castle-85858.herokuapp.com/api/company/register_company/';// Register company as a manager of the company
const api_path4 = 'https://secret-castle-85858.herokuapp.com/api/profile/createprofile/';
const api_path5 = 'https://secret-castle-85858.herokuapp.com/api/profile/620ffb284d3dbfcd53d8d074'; //test profile
let api_path6 = 'https://secret-castle-85858.herokuapp.com/api/profile/' //get profile, need to append profile id at the end
const api_path7 = 'https://secret-castle-85858.herokuapp.com/api/company/620c5e2956556e6985a37cbc'; //test company
let api_path8 = 'https://secret-castle-85858.herokuapp.com/api/company/' //get company, need to append company id at the end

@Injectable({
  providedIn: 'root'
})
export class SubmitAppService {
email_address:String;
role:String;
userId:String;
company_id:String;
company:any;
profile_id:String;
profile:any;
  constructor(private http: HttpClient){ }

  submit_app_form(data:any) : Observable<any>
  {
    return this.http.post<any>(api_path,data);
  }
  register_app_form(data:any):Observable<any>{
    return this.http.post<any>(api_path2,data);
  }
  
  register_company_form(data:any):Observable<any>{
    return this.http.post<any>(api_path3+this.userId,data);
  }

  register_profile_form(data:any):Observable<any>{
    return this.http.post<any>(api_path4+this.userId,data);
  }

  get_profile(): Observable<any>
  {
    return this.http.get<any>(api_path5);
  }

  get_profile_by_id(id: String): Observable<any>
  {
    
    
    return this.http.get<any>(api_path6+id);
  }

  get_company(): Observable<any>
  {
    return this.http.get<any>(api_path7);
  }

  get_company_by_id(id: String): Observable<any>
  {
    
    return this.http.get<any>(api_path8+id);
  }
}
