import { Component, OnInit } from '@angular/core';
import { Video } from "../video";
import{VideossService} from '../videoss.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-videocentre',
  templateUrl: './videocentre.component.html',
  styleUrls: ['./videocentre.component.css'],
  providers:[VideossService]
})
export class VideocentreComponent implements OnInit {



selectedvideo:Video;
Vids:Video[];




status:any="unsolved";
i:any="meracard unsolved mat-card";
ival1()
{
  this.i="meracard unsolved mat-card";
  this.status="unsolved";
  console.log(this.status);
}
ival2()
{
  this.i="meracard solved mat-card";
  this.status="solved";
  console.log(this.status);
}



  constructor(private vs:VideossService,
              private router:Router
            ) {
    if(localStorage.getItem("loggedinas")!="Sysadmin"&&localStorage.getItem("loggedinas")!="Padmin"&&localStorage.getItem("loggedinas")!="User")
     this.router.navigate(['/login']); 
   }

ngOnInit() {
    this.vs.getvideos()
    .subscribe(resvideodata=>this.Vids=resvideodata);
  }
onselectvideo(video: any)
{
  this.selectedvideo=video;
  console.log(this.selectedvideo);
}

}
