import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-remadmin',
  templateUrl: './remadmin.component.html',
  styleUrls: ['./remadmin.component.css']
})
export class RemadminComponent implements OnInit {
  submit=false;
  i=true;
  user:string;
  OnSubmit()
  {
    this.submit=true;
  }

  constructor(private bs:UserService,
  private router:Router) {
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
  cl()
  {
    console.log(this.user);
    this.i=false;
    this.bs.deladmin(this.user).subscribe(res=>{console.log(res);});
  }
}
