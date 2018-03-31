import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { VideossService } from '../videoss.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Tech } from '../technic';
@Component({
  selector: 'app-chtec',
  templateUrl: './chtec.component.html',
  styleUrls: ['./chtec.component.css'],
  providers:[VideossService]
})
export class ChtecComponent implements OnInit {
i=true;
  categs:Category[];
  techi=new Tech('','',0);
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
    this.vs.getvideos()
    .subscribe(resvideodata=>this.categs=resvideodata);
  }
  addedcategory(){

    this.i=false;
 console.log("specializatoin "+this.techi.specialisation);
    this.us.signint(this.techi).subscribe(res=>{console.log(res);});
  }

}
