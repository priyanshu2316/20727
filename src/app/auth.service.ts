import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import { logindetail } from './login';
import { HttpClient } from '@angular/common/http';


interface AuthResponse {
  status: string,
  success: string,
  token: string,
  prob:string[]
};

interface JWTResponse {
  status: string,
  success: string,
  user: any
};

@Injectable()
export class AuthService {
  tokenKey: string = 'JWT';
 isAuthenticated: Boolean = false;
 username: Subject<string> = new Subject<string>();
 authToken: string = undefined;
  private geturl="/user/";
  ty: string;

  constructor(private ht:HttpClient,private http:Http) { }

  logIn(user:any): Observable<any> {

    return this.ht.post<AuthResponse>(this.geturl+'loginuser',
      {"username": user.userName, "password": user.password})
      .map(res => {
          this.storeUserCredentials({username: user.userName, token: res.token});
          return {'success': true, 'username': user.userName };
      });}
      logInp(user:any): Observable<any> {
    
        return this.ht.post<AuthResponse>(this.geturl+'loginPadmin',
          {"username": user.userName, "password": user.password})
          .map(res => {
              this.storeUserCredentials({username: user.userName, token: res.token});
              return {'success': true, 'username': user.userName ,'prob':res.prob};
          });}

    loginsa(user: any):Observable<any>{
        //let headers= new Headers({
        //  'Content-Type': 'application/json'
        //});
        //let options=new RequestOptions({
          //headers:headers
        //});
        return this.ht.post<AuthResponse>('/user/loginsadmin',{"username": user.userName, "password": user.password})
        .map(res=>{return {'success': true, 'username': user.userName };});


  }
  loginsp(stri:any,strin:any){
      let headers= new Headers({
        'Content-Type': 'application/json'
      });
      let options=new RequestOptions({
        headers:headers
      });
      return this.http.post('/user/loginsadmin',JSON.stringify(stri,strin),options).map((res:Response)=>res.json());


}

  checkJWTtoken() {
      this.ht.get<JWTResponse>(this.geturl+'checkJWTToken')
      .subscribe(res => {
        console.log("JWT Token Valid: ", res);
        this.sendUsername(res.user.userName);
      },
      err => {
        console.log("JWT Token invalid: ", err);
        this.destroyUserCredentials();
      })
    }

    sendUsername(name: string) {
      this.username.next(name);
    }

    clearUsername() {
      this.username.next(undefined);
    }

    loadUserCredentials() {
      var credentials = JSON.parse(localStorage.getItem(this.tokenKey));
      console.log("loadUserCredentials ", credentials);
      if (credentials && credentials.username != undefined) {
        this.useCredentials(credentials);
        if (this.authToken)
          this.checkJWTtoken();
      }
    }

    storeUserCredentials(credentials: any) {
      console.log("storeUserCredentials ", credentials);
      localStorage.setItem(this.tokenKey, JSON.stringify(credentials));
      this.useCredentials(credentials);
    }

   useCredentials(credentials: any) {
      this.isAuthenticated = true;
      this.sendUsername(credentials.username);
      this.authToken = credentials.token;
    }

    destroyUserCredentials() {
      this.authToken = undefined;
      this.clearUsername();
      this.isAuthenticated = false;
      localStorage.removeItem(this.tokenKey);
    }

    signUp() {

    }



    isLoggedIn(): Boolean {
      return this.isAuthenticated;
    }

    getUsername(): Observable<string> {
      return this.username.asObservable();
    }

    getToken(): string {
      return this.authToken;
    }
}
