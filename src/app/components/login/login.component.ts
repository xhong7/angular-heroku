import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SubmitAppService } from 'src/app/services/submit-app.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public UserLogin:any={
  email_address:'',
  password:''
}
querySub:any;
  constructor(private data:SubmitAppService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  doSubmit(){
    console.log(this.UserLogin);
    this.querySub=this.data.submit_app_form(this.UserLogin).subscribe((info)=>{
      console.log("login test");
      if(info=="logged in")
      {
        console.log("login test2");
        //bring the users to the new page
        this.data.email_address=this.UserLogin.email_address;
        this.router.navigate(['/home']);
      }
        
      
     
    });
    
  }

}
