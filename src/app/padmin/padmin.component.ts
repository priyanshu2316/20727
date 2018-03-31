import { Component, OnInit,Input } from '@angular/core';
import {Element} from '../ELEMENT';
import {data} from '../Data'
import { Router ,Params,ActivatedRoute} from '@angular/router';
import { Video } from "../video";
import{VideossService} from '../videoss.service';
import { problems } from "../problems";
import { Category } from '../category';
import { UserService } from '../user.service';


@Component({
  selector: 'app-padmin',
  templateUrl: './padmin.component.html',
  styleUrls: ['./padmin.component.css'],
  providers:[VideossService]
})
export class PadminComponent  {
 ele=data;
 categ:any;
 ar: string[] =["a","b"

 ];
 selectprob:Element;
 btn:string;
 prbs:problems[];
 @Input('cate') catename:string;
 ab:any;
a="meracard ";
b=" mat-card";
c="1";
allcats: Category[]

categs: string[]=["",""];


 
 constructor(
  private router:Router,
  private vs:VideossService,
  private us:UserService,
            private route:ActivatedRoute
              //private router:Router
) { 
if(localStorage.getItem("loggedinas")!="Padmin")
   {
    if(localStorage.getItem("loggedinas")=="Sysadmin")
    this.router.navigate(['/sa']);
    else if(localStorage.getItem("loggedinas")=="User")
    this.router.navigate(['/videos']);
    else
    this.router.navigate(['/login']); 
   }
 //this.categ=localStorage.getItem("category");
}
ngOnInit() {
  //console.log(this.cate);
//this.ab=this.vs.data;
// console.log(this.ab);
//this.vs.getvideos()
//.subscribe(resvideodata=>this.allcats=resvideodata);



  this.vs.getproblem(localStorage.getItem("padminname"))
  .subscribe(resvideodata=>this.prbs=resvideodata);

}

ival1(ide,status,usrnam)
{
  if(status!='review')
 this.vs.updatestatusre(ide)
 .subscribe(resvideodata=>console.log(resvideodata));
 this.us.sendemail(ide,usrnam)
 .subscribe(res=>console.log(res));
}





 OnSelect(prob: Element)
 {
   this.selectprob=prob;
   if(this.selectprob.Status="Reported")
   {
     this.selectprob.Status="Inprogress";
   }
   else if( this.selectprob.Status="Inprogress")
   {
    this.selectprob.Status="Review";
     }
   console.log(this.selectprob);
 }







}

