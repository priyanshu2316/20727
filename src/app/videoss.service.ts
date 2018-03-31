import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class VideossService {
  private geturl="/api/videos";
  private geturl1="/user/getcat";
  private geturl2="/sign/getadmin";
  

  constructor(private ht:Http) { }
getcategory()
{
  return this.ht.get(this.geturl1).map((res:Response)=> res.json());
}
 getvideos()
{
  return this.ht.get(this.geturl).map((res:Response)=> res.json());

}
getpadmins()
{
  return this.ht.get(this.geturl2).map((res:Response)=> res.json());

}
getlocations()
{
  return this.ht.get("/api/getloc").map((res:Response)=> res.json());

}
getdetails()
{
  return this.ht.get("/api/getgraph").map((res:Response)=> res.json());

}
gettechnicians()
{
  return this.ht.get("/api/getTechnician").map((res:Response)=> res.json());
}
getproblem(pa:string)
{
 return this.ht.get(this.geturl+"/"+pa).map((res:Response)=> res.json());

}
getproblemu(pa:string)
{
 return this.ht.get("/api/videosc/"+pa).map((res:Response)=> res.json());

}
myproblem(un:string)
{
  return this.ht.get("/feedback/myprob/"+un).map((res:Response)=> res.json());
}
updatestatus(ide:string)
{
  
  return this.ht.post("/feedback/feed/"+ide,"yes").map((res:Response)=> res.json());
}
updatestatusno(ide:string)
{
  
  return this.ht.post("/feedback/feedno/"+ide,"yes").map((res:Response)=> res.json());
}
updatestatusre(ide:string)
{
  
  return this.ht.post("/feedback/feedre/"+ide,"yes").map((res:Response)=> res.json());
}

 public data:any;
private qwe:any;



  setData(dat){
    this.data = dat;
    console.log(this.data);
  }

  getData():any{
   // console.log("fefhg");
   //this.qwe= this.data;
   // this.clearData();
   //console.log(this.data+"fgrghm");
    //return temp;
  // return this.qwe;
  return this.data;
  
  }

}
