import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Category } from '../category';
import { Updateform } from '../updateform';
import { VideossService } from '../videoss.service';
@Component({
  selector: 'app-categ',
  templateUrl: './categ.component.html',
  styleUrls: ['./categ.component.css'],
  providers:[VideossService]
})
export class CategComponent implements OnInit {
  admins:any[];
  i=true;
  categ=new Category('','',0,0);
  submit=false;
  OnSubmit()
  {
    this.submit=true;
  }

  constructor(private us:UserService,private vs:VideossService,
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
    this.vs.getpadmins()
    .subscribe(resvideodata=>this.admins=resvideodata);
  }
  addedcategory(){

    this.i=false;
    console.log(this.categ.padmin+this.categ+"categ");
    this.us.signinc(this.categ).subscribe(res=>{console.log(res);});
  }
 
}
