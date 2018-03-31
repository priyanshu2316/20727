import { Component, OnInit } from '@angular/core';
import { VideossService } from '../videoss.service';
@Component({
  selector: 'app-viewtech',
  templateUrl: './viewtech.component.html',
  styleUrls: ['./viewtech.component.css'],
  providers:[VideossService]
})
export class ViewtechComponent implements OnInit {
  ts:any[];
  constructor(private vs:VideossService) {
   }

  ngOnInit() {
  	this.vs.gettechnicians()
    	.subscribe(resvideodata=>this.ts=resvideodata);
  }

}
