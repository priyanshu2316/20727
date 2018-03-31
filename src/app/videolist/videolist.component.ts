import { Component, OnInit,EventEmitter } from '@angular/core';
import { Video } from "../video";
import { problems } from "../problems";
import { Location } from '@angular/common';
import {VideossService} from '../videoss.service';
import { Params, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'videolist',
  templateUrl: './videolist.component.html',
  styleUrls: ['./videolist.component.css'],
  providers:[VideossService]
  //inputs:['Vids'],
  //outputs:['SelectVideo']
})
export class VideolistComponent implements OnInit {

//public SelectVideo= new EventEmitter();
 prbs:problems[];
hid=true;
showdes()
{
  if(this.hid==true)
  this.hid=false;

  else
  this.hid=false;
}

 a:any="meracard ";
 b:any=" mat-card";

 status:any="unsolved";
i:any="meracard unsolved mat-card";
ival1(pr:problems)
{
  this.i="meracard unsolved mat-card";
  pr.status="unsolved";
  console.log(this.status);
}
ival2(pr:problems)
{
  this.i="meracard solved mat-card";
  pr.status="solved";
  console.log(this.status);
}



  constructor(private v:VideossService,
              private route:ActivatedRoute,
              private router:Router
  ) {
    if(localStorage.getItem("loggedinas")!="Sysadmin"&&localStorage.getItem("loggedinas")!="Padmin"&&localStorage.getItem("loggedinas")!="User")
    this.router.navigate(['/login']); 
 }

  ngOnInit() {
    this.route.params.switchMap((params:Params)=>this.v.getproblemu(params['category']))
    .subscribe(resvideodata=>this.prbs=resvideodata);
    console.log("Category fetched");
  }

//onSelect(Hey: Video)
//{
//  this.SelectVideo.emit(Hey);
//}

}
