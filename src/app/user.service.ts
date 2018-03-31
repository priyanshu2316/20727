import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { Updatefor } from './updatefor';
import { Updateform } from './updateform';
import { HttpClient } from '@angular/common/http';
import { problems } from './problems';
import { Category } from './category';
import { Tech } from './technic';
@Injectable()
export class UserService {

  constructor(private ht :Http) { }
 signin(usr:Updatefor){
       let headers= new Headers({
         'Content-Type': 'application/json'
       });
       let options=new RequestOptions({
         headers:headers
       });
       return this.ht.post('/sign/signupgenUser',JSON.stringify(usr),options).map((res:Response)=>res.json());
 }
 addprob( pr :problems){
   let headers= new Headers({
     'Content-Type': 'application/json'
   });
   let options=new RequestOptions({
     headers:headers
   });
   return this.ht.post('/prob/addproblem',JSON.stringify(pr),options).map((res:Response)=>res.json());
 }

 updatestatus(ide :string,feed:string){
  let headers= new Headers({
    'Content-Type': 'application/json'
  });
  let options=new RequestOptions({
    headers:headers
  });
  return this.ht.post('/feedback/feed/'+ide,JSON.stringify(feed),options).map((res:Response)=>res.json());
}

 signinp(usr:Updateform){
       let headers= new Headers({
         'Content-Type': 'application/json'
       });
       let options=new RequestOptions({
         headers:headers
       });
       return this.ht.post('/sign/signupPAdmin',JSON.stringify(usr),options).map((res:Response)=>res.json());
 }

 signinc(cat:Category){
  let headers= new Headers({
    'Content-Type': 'application/json'
  });
  let options=new RequestOptions({
    headers:headers
  });
  return this.ht.post('/sign/signupCat',JSON.stringify(cat),options).map((res:Response)=>res.json());
}

signint(tech:Tech){
  let headers= new Headers({
    'Content-Type': 'application/json'
  });
  let options=new RequestOptions({
    headers:headers
  });
  return this.ht.post('/sign/signupTechnician',JSON.stringify(tech),options).map((res:Response)=>res.json());
}
addlocation(loc){
  let headers= new Headers({
    'Content-Type': 'application/json'
  });
  let options=new RequestOptions({
    headers:headers
  });
  return this.ht.post('/sign/signuploc',{"location":loc},options).map((res:Response)=>res.json());
}
sendemail(ide:string,un:string)
{
  let headers= new Headers({
    'Content-Type': 'application/json'
  });
  let options=new RequestOptions({
    headers:headers
  });
  return this.ht.post('/mail',{"id":ide,"username":un},options).map((res:Response)=>res.json());
}
 delusr(usr:string){
  
  return this.ht.delete('/sign/deluser/'+usr).map((res:Response)=>res.json());
}
deladmin(usr:string){
  
  return this.ht.delete('/sign/delprob/'+usr).map((res:Response)=>res.json());
}
}
