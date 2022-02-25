import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {

  theProfile: any={
    user_name: '',
    first_name: '',
    last_name: '',
    email_address: '',
    profile_pic: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
    resume: '',
    education: '',
    interests: '',
    hobbies: '',
    field: '',
    city: '',
    country: '',
  };

  constructor(private data: SubmitAppService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if(this.data.profile_id!==''){
    this.data.get_profile_by_id(this.data.profile_id).subscribe(info =>
      {
        console.log(this.data.userId);
        
        if(info){
          this.theProfile = info;
          this.data.profile=info;
        }
        
        console.log(this.theProfile);
      });}
  }

  //need to populate form page when user clicks edit

  downloadResume()
  {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://g13jobapi.herokuapp.com/api/profile/resume/1645749363224.pdf');
    link.setAttribute('download', ``);
    document.body.appendChild(link);
    link.click();
    link.remove();
    console.log("https://g13jobapi.herokuapp.com/api/profile/resume/api/profile/resume/1645214504844.pdf");
  }

  uploadResume()
  {
    this.router.navigate(['/resume']); //need to add applicant id here to the url
  }
}
