import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideossService } from '../videoss.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-locat',
  templateUrl: './locat.component.html',
  styleUrls: ['./locat.component.css']
})
export class LocatComponent implements OnInit {
  admins:any[];
  i=true;
  location;
  submit=false;
  OnSubmit()
  {
    this.submit=true;
  }

  constructor(private us:UserService,
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
  addedlocation(){

    this.i=false;
    console.log(this.location);
    this.us.addlocation(this.location).subscribe(res=>{console.log(res);});
  }
}
