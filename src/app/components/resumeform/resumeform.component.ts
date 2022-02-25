import { Component, OnInit } from '@angular/core';
import { SubmitAppService } from 'src/app/services/submit-app.service';

@Component({
  selector: 'app-resumeform',
  templateUrl: './resumeform.component.html',
  styleUrls: ['./resumeform.component.css']
})
export class ResumeformComponent implements OnInit {
 url:any='https://secret-castle-85858.herokuapp.com/api/profile/createresume/';
 userId:any='';
  constructor(private data: SubmitAppService) { }

  ngOnInit(): void {
this.url=this.url+this.data.userId;
console.log('the url to upload '+this.url);
  }

}
