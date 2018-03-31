import { Component, OnInit } from '@angular/core';
import { Updateform } from '../updateform';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chpro',
  templateUrl: './chpro.component.html',
  styleUrls: ['./chpro.component.css'],
  providers:[UserService]
})
export class ChproComponent implements OnInit {
  Problems=['Electricity','Internet','Sanitation','Parking'];
admin=new Updateform('','','','','','');
submit=false;
i=true;
OnSubmit()
{
  this.submit=true;
}
get diagnostic() { return JSON.stringify(this.admin)};

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
  addedpadmin()
  {
    console.log("this admin added:");
    this.i=false;
    this.us.signinp(this.admin).subscribe(res=>{console.log(res);});
  }
}
