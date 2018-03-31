import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import{Subscription} from 'rxjs/Subscription';
import { VideossService } from '../videoss.service';
import { problems } from "../problems";
import { UserService } from '../user.service';

@Component({
  selector: 'app-myprob',
  templateUrl: './myprob.component.html',
  styleUrls: ['./myprob.component.css'],
  providers:[AuthService,VideossService]
})
export class MyprobComponent implements OnInit {
un=true;
username: string;
prbs:problems[];
sb:Subscription;
a="meracard ";
b=" mat-card";
c="1";
v="/public";
x="data:image/jpeg;base64,";
status:any="unsolved";
i:any="review";
feed="yes";
feed1="no";
ival1(ide)
{
  
  this.vs.updatestatus(ide)
  .subscribe(resvideodata=>console.log(resvideodata));
}


ival2(ide)
{
  this.vs.updatestatusno(ide)
  .subscribe(resvideodata=>console.log(resvideodata));
  
}


  constructor(private router:Router,
    private au:AuthService,
    private vs:VideossService,
    private us:UserService
  ) {
       if(localStorage.getItem("loggedinas")!="User")
       {
        if(localStorage.getItem("loggedinas")=="Sysadmin")
        this.router.navigate(['/sa']);
        else if(localStorage.getItem("loggedinas")=="Padmin")
        this.router.navigate(['/padmin']);
        else
        this.router.navigate(['/login']);
       }
       this.username=localStorage.getItem("username");
      }

  ngOnInit() {
   /*this.au.loadUserCredentials();
   this.sb = this.au.getUsername()
   .subscribe(name=>{console.log(name);this.username=name;})*/

  console.log(this.username);
  this.vs.myproblem(this.username)
  .subscribe(resvideodata=>{this.prbs=resvideodata;});
  console.log(this.prbs);
  }

}
