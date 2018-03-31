import { Component, OnInit } from '@angular/core';
import 'hammerjs';


@Component({
  selector: 'app-adash',
  templateUrl: './adash.component.html',
  styleUrls: ['./adash.component.css']
})
export class AdashComponent implements OnInit {
status:any="unsolved";
i:any="meracard unsolved mat-card";
ival1()
{
  this.i="meracard unsolved mat-card";
  this.status="unsolved";
  console.log(this.status);
}
ival2()
{
  this.i="meracard solved mat-card";
  this.status="solved";
  console.log(this.status);
}
  constructor() {
   }

  ngOnInit() {
  }

}
