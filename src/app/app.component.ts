import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible=false;
  constructor(
    private router:Router
) { 
if(localStorage.getItem("loggedinas")=="Sysadmin"||localStorage.getItem("loggedinas")=="Padmin"||localStorage.getItem("loggedinas")=="User")
{
  this.visible=true;
}
}
logout()
{
  this.visible=false;
  localStorage.removeItem("loggedinas");
}
}
