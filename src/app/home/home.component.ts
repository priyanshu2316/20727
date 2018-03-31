import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
ch=true;
co=true;
pa=true;navcomp:string;
  constructor(private router:Router) {
    if(localStorage.getItem("loggedinas")=="User")
  {
    this.ch=false;
    this.co=true;
    this.pa=true;
    this.navcomp="nav four";
  }
  else if(localStorage.getItem("loggedinas")=="Sysadmin")
  {
    this.co=false;
    this.ch=true;
    this.pa=true;
    this.navcomp="nav four";
  }
  else if(localStorage.getItem("loggedinas")=="Padmin")
  {
    this.pa=false;
    this.co=true;
    this.ch=true;
    this.navcomp="nav three";
  }
   }
  
  ngOnInit() {
  }
  logout()
  {
    localStorage.removeItem("loggedinas");
    this.router.navigate(['/login']); 
  }
}
