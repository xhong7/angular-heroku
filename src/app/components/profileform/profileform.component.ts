import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profileform',
  templateUrl: './profileform.component.html',
  styleUrls: ['./profileform.component.css']
})
export class ProfileformComponent implements OnInit {
  public profileInfo:any={
    user_name:'',
    first_name:'',
    last_name:'',
    email_address:'',
    profile_pic:'',
    resume: '',
    education: '',
    interests: '',
    hobbies: '',
    field: '',
    city: '',
    country: '',
  }
  querySub:any;
  educations = 
  [
    { name: "None", value: "none"},
    { name: "Highschool", value: "highschool"},
    { name: "Diploma", value: "diploma"},
    { name: "Degree", value: "degree"},
    { name: "Masters", value: "masters"},
    { name: "PhD", value: "phd"}
  ]
  selectedEducation: String;
  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.data.profile){
      this.profileInfo.user_name=this.data.profile.user_name;
      this.profileInfo.first_name=this.data.profile.first_name;
      this.profileInfo.last_name=this.data.profile.last_name;
      this.profileInfo.email_address=this.data.profile.email_address;
      this.profileInfo.profile_pic=this.data.profile.profile_pic;

      this.profileInfo.resume=this.data.profile.resume;
      this.profileInfo.education=this.data.profile.education;
      this.profileInfo.interests=this.data.profile.interests;
      this.profileInfo.hobbies=this.data.profile.hobbies;
      this.profileInfo.field=this.data.profile.field;
      this.profileInfo.city=this.data.profile.city;
      this.profileInfo.country=this.data.profile.country;




    }
  }
  ngOnDestroy() {
    if (this.querySub) this.querySub.unsubscribe();
  }
  doSubmit(){
    //this.profileInfo.education=this.selectedEducation
    if (this.selectedEducation == "none")
    {
      this.profileInfo.education = "None";
    }
    else if (this.selectedEducation == "highschool")
    {
      this.profileInfo.education = "Highschool";
    }
    else if (this.selectedEducation == "diploma")
    {
      this.profileInfo.education = "Diploma";
    }
    else if (this.selectedEducation == "degree")
    {
      this.profileInfo.education = "Degree";
    }
    else if (this.selectedEducation == "masters")
    {
      this.profileInfo.education = "Masters";
    }
    else if (this.selectedEducation == "phd")
    {
      this.profileInfo.education = "PhD";
    }
    console.log(this.profileInfo);
    this.querySub=this.data.register_profile_form(this.profileInfo).subscribe(info => 
      {
        console.log(info);
        this.data.profile_id=info;
        this.router.navigate(['/home']);
      });
    
  }
}
