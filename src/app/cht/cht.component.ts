import { Component, OnInit, Input,ElementRef } from '@angular/core';
import { UserService } from '../user.service';
import { problems } from '../problems';
import { BaseService } from '../base.service';
import { VideossService } from '../videoss.service';
import { Video } from "../video";
import{LogvarService}from'../logvar.service';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
//import the do function to be used with the http library.
import "rxjs/add/operator/do";
//import the map function to be used with the http library
import "rxjs/add/operator/map";
import { ElementDef } from '@angular/core/src/view';


@Component({
  selector: 'app-cht',
  templateUrl: './cht.component.html',
  styleUrls: ['./cht.component.css'],
  providers:[UserService,BaseService,VideossService]
})

export class ChtComponent implements OnInit {
  prin:any;
  putp:any;
  nvis=true;
  ss:any;
  i=0;j=0;
  id1:any;
  locs:any[];
  loclistnotvisible=true;
  z:string="Upload";
  p=true;
  m:number=1;
  cat:string;
  cbtns:string[]=[];
  impimg:string[]=[];
  loc:string;
  dec:string;
  confirm:any;
  prodo: Video[];
  catsel=false;
  adm:any;
problem=new problems('','','','','','','','')
  messages = [{
    "text":"Choose from the options above",
    "nb":"chat",
    "i":"assets/img/b.jpg"
  }];
  imgpath: string;
  onClick(dat,admi
  ){
    this.i++;
  this.messages.push({
   "text":dat,
   "nb":"chat nb",
   "i":"/assets/img/chatbox.jpg"
  });
  if(this.i==1)
  {
    console.log("category:");
    console.log(dat);
    console.log("problem Admin:"+admi);
    this.cat=dat;
    this.adm=admi;
    this.catsel=true;
    this.messages.pop();
    this.messages.pop();

  this.messages.push({
    "text":dat,
    "nb":"chat nb",
    "i":"/assets/img/chatbox.jpg"
   })
  this.messages.push({
    "text":"Enter the description",
    "nb":"chat",
    "i":"/assets/img/b.jpg"
   })
  }
  if (this.i==4) {

    this.cbtns.pop();
    this.nvis=true;
    if(dat=="Upload")
    {
      let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#imageFile');
      let filCnt: number = inputEl.files.length;
      if (filCnt<=0) {
        this.messages.push({
          "text":"Please choose a file then upload",
          "nb":"chat",
          "i":"/assets/img/b.jpg"
         });
         this.nvis=false;
         this.cbtns.push("Donot upload");
         this.i--;
      }
      else{
        this.p=true;
        this.messages.push({
          "text":"Are you sure you want to submit?",
          "nb":"chat",
          "i":"/assets/img/b.jpg"
         });
         this.cbtns.push("Yes");
         this.cbtns.push("No");
      
      }
    }
    if(dat=="Donot upload"){

      this.messages.push({
        "text":"Are you sure you want to submit?",
        "nb":"chat",
        "i":"/assets/img/b.jpg"
       });
       this.cbtns.push("Yes");
       this.cbtns.push("No");
    
    }
  }
  if(this.i==5)
  {
    this.cbtns.pop();
    this.cbtns.pop();
    if(dat=="No")
    {
      this.j=this.messages.length;
      for (let index = 0; index < this.j; index++) {
        this.messages.pop();
        console.log(index);
        this.catsel=false;
      }
      this.messages.push({
        "text":"Choose from the options above",
        "nb":"chat",
        "i":"assets/img/b.jpg"
      });
      this.i=0;

    }
    if(dat=="Yes")
    {
      console.log(localStorage.getItem("username"));
       this.problem.put(localStorage.getItem("username"),this.cat,this.dec,this.loc,'','unsolved',this.adm);
       console.log(this.problem);
      this.addedprob();
      this.router.navigate(['/myprob']);
      alert("Your Problem have been registered to "+this.adm);
    }
  }
};



x="chat";
y="chat nb";
@Input() sent;
 send(){
if(this.sent==""){console.log("Empty Input");}
else
 {
 this.messages.push({
    "text":this.sent,
    "nb":"chat nb",
    "i":"/assets/img/chatbox.jpg"
   })
   if (this.i==2) {
    this.i++;
    this.loc=this.sent;
    this.loclistnotvisible=true;
    this.sent="";
    console.log("location:");
    console.log(this.loc);
    this.messages.push({
      "text":"Upload an image if you want to:",
      "nb":"chat",
      "i":"/assets/img/b.jpg"
     });
     this.nvis=false;
     this.cbtns.push("Donot upload");
  }
   if (this.i==1) {
    this.i++;
   this.dec=this.sent;
   this.sent="";
   console.log("description:");
    console.log(this.dec);
   this.messages.push({
    "text":"Enter the location",
    "nb":"chat",
    "i":"/assets/img/b.jpg"
   });
   this.loclistnotvisible=false;
  }
//<input id="photo" type="file"/> <button type="button" (click)="upload()">
  }
 }


   /*this.problem.category=this.cat;
   this.problem.description= this.dec;
this.problem.location=this.loc;
   this.problem.image="";
 this.problem.status="unsolved";*/

  constructor(
    private us:UserService,
    private bs:BaseService,
    private vs:VideossService,
    private lg:LogvarService,
    private router:Router,
    private http:Http,
    private el:ElementRef
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
    }


  ngOnInit() {
    //this.prodo=this.bs.getproblemdomain();
    this.vs.getvideos()
    .subscribe(resvideodata=>this.prodo=resvideodata);

    this.vs.getlocations()
    .subscribe(resvideodata=>this.locs=resvideodata);
    console.log(this.locs);
    console.log();
    
  }
  addedprob()
  {
    console.log("this Problem added:");
    console.log(this.problem);
    this.us.addprob(this.problem).subscribe(res=>{console.log(res._id+"ye hai asli banda"); localStorage.setItem("myid",res._id);  console.log("uper hai id");
    this.upload();},err=>{console.log("error ayaa hai");});
  }
  logout()
{
  localStorage.removeItem("loggedinas");
  this.router.navigate(['/login']); 
}


upload() {
  //locate the file element meant for the file upload.
  console.log("ye he upload");
      let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#imageFile');
  //get the total amount of files attached to the file input.
  let fileCount: number = inputEl.files.length;
  this.ss=localStorage.getItem("myid");
  console.log(this.ss);
  console.log(fileCount);
  //create a new fromdata instance
      let imageFil = new FormData();
  //check if the filecount is greater than zero, to be sure a file was selected.
      if (fileCount > 0) { // a file was selected
          //append the key name 'photo' with the first file in the element
              imageFil.append('imageFile', inputEl.files.item(0));
              
          //call the angular http method

          this.http
      //post the form data to the url defined above and map the response. Then subscribe //to initiate the post. if you don't subscribe, angular wont post.
              .post("/probsim/upload/"+this.ss, imageFil).map((res:Response) => res.json()).subscribe(
              //map the success function and alert the response
               (success) => {
                       console.log("uploadhuigawa");
                       alert(success._body);
              },
              (error) => alert(error))
        }
     }




}
