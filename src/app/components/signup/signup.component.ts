import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userInfo:any={
    user_name:'',
    first_name:'',
    last_name:'',
    password:'',
    email_address:'',
    is_Manager: false,
    is_Recruiter: false,
    is_Applicant: false,
    profile_pic:''
  }
  querySub:any;
  roles = 
  [
    { name: "Manager", value: "manager"},
    { name: "Recruiter", value: "recruiter"},
    { name: "Applicant", value: "applicant"}
  ]
  role: String;

  constructor(private data:SubmitAppService,private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  
  doSubmit(){

    console.log(this.role);
    if (this.role == "manager")
    {
      this.userInfo.is_Manager = true;
    }
    else if (this.role == "recruiter")
    {
      this.userInfo.is_Recruiter = true;
    }
    else if (this.role == "applicant")
    {
      this.userInfo.is_Applicant = true;
    }
    console.log(this.userInfo);
    this.data.register_app_form(this.userInfo).subscribe(info=>{
      console.log("signup test");
        console.log(info);
        if(info.email_address==this.userInfo.email_address){
          //bring the users to a new page
          console.log(this.role);
          this.router.navigate(['/login']);
        }
      
      
    });
    
  }
}
