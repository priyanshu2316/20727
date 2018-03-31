import { Component, OnInit } from '@angular/core';
import { VideossService } from '../videoss.service';
import { Category } from '../category';


@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css'],
  providers:[VideossService]
})
export class BarComponent implements OnInit {
nu:any;
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public wer:Category[];
  public categ : string[];
  //public barChartLabels:string[];
  public numb:number[];
 
  public numb1:number[];
  //public barChartData:any[] =[]; 
  gets()
  {

  }
  constructor(private vs:VideossService) { }
 // public barChartLabels:string[];
  ngOnInit() {
    this.vs.getdetails()
    .subscribe(resvideodata=>
      console.log(resvideodata));
     /*for (let index = 0; index < ; index++) {
        this.numb[index]=this.wer[index].solved;
        this.numb1[index]=this.wer[index].unsolved;
        this.barChartLabels[index]=this.wer[index].category;*/
        //this.wer.forEach(function(item,index){console.log(item);});
       console.log();
     //}
    //console.log(this.wer.solved);
    }
    public barChartLabels:string[] = ['Electricity', 'Internet', 'Food', 'Hostel', 'Computer'];
   
  public barChartData:any[] = [
    {data: [20,22,43,10,6], label: 'Solved'},
    {data: [12,13,23,6,2], label: 'Unsolved'}
  ];
 
   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
}
