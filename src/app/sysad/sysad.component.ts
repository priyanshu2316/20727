import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sysad',
  templateUrl: './sysad.component.html',
  styleUrls: ['./sysad.component.css']
})
export class SysadComponent implements OnInit {

  constructor(private router:Router) {
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

}
