import { Component, OnInit } from '@angular/core';
import { Updatefor } from '../updatefor';
import { UserService } from '../user.service';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
 //import{Http} from '@angular/http';
@Component({
  selector: 'app-chusr',
  templateUrl: './chusr.component.html',
  styleUrls: ['./chusr.component.css'],
  providers:[UserService]
})


export class ChusrComponent implements OnInit {
  types=["Student","Teacher"];
  user=new Updatefor('','','','','','');
  submit=false;
  OnSubmit()
  {
    this.submit=true;
  }

 i=true;

  get diagnostic() { return JSON.stringify(this.user)};

goback()
{

}

  constructor(private bs:UserService,
              private router:Router
  ) { 
    if(localStorage.getItem("loggedinas")!="Sysadmin")
    {
      if(localStorage.getItem("loggedinas")=="User")
      this.router.navigate(['/chat']);
      else if(localStorage.getItem("loggedinas")=="Padmin")
      this.router.navigate(['/padmin']);
      else
      this.router.navigate(['/login']);
     }
   
  }

  ngOnInit() {
  }
  addeduser()
  {
    console.log("this user add:");
    this.i=false;
    this.bs.signin(this.user).subscribe(res=>{console.log(res);});
  }
}
