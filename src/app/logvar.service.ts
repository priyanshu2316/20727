import { Injectable } from '@angular/core';

@Injectable()
export class LogvarService {
var=1;
  constructor() { }
   log(v:number)
   {
     this.var=v;
     
   }
   get()
   {
     return this.var;
   }
}
