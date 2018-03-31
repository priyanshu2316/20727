import { Component,Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { logindetail } from '../login';
import { AuthService } from '../auth.service';
import{LogvarService}from'../logvar.service';
import { VideossService } from '../videoss.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService,VideossService]
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  ld: logindetail;
  array:any[];
   returnUrl: string;
   i:any=false;
   @Input()
   l:number =1;
   prin="";
   
   cate: string;
   logout()
   {
     localStorage.removeItem("loggedinas");
     this.router.navigate(['/chat']); 
   }
   gb()
   {
    if(localStorage.getItem("loggedinas")=="Sysadmin")
    this.router.navigate(['/sa']);
    else if(localStorage.getItem("loggedinas")=="Padmin")
    this.router.navigate(['/padmin']);
    else
    this.router.navigate(['/videos']);
   }
  private formSubmitAttempt: boolean;

  constructor(private route: ActivatedRoute,
        private router: Router,
        private lg:LogvarService,
         private fb: FormBuilder,         // {3}
   private authService: AuthService,
   private vs:VideossService  // {4}
 ) {
   
if(localStorage.getItem("loggedinas")=="Sysadmin"||localStorage.getItem("loggedinas")=="Padmin"||localStorage.getItem("loggedinas")=="User")
{
  this.i=true;
}
  }

  status:any="unsolved";
  p:any="meracard unsolved mat-card";
  ival1()
  {
    this.p="meracard unsolved mat-card";
    this.status="unsolved";
    console.log(this.status);
  }
  ival2()
  {
    this.p="meracard solved mat-card";
    this.status="solved";
    console.log(this.status);
  }








 ngOnInit() {
     this.form = this.fb.group({     // {5}
       userName: ['', Validators.required],
       password: ['', Validators.required],
       type:['']
     });

   }

   isFieldInvalid(field: string) { // {6}
     return (
       (!this.form.get(field).valid && this.form.get(field).touched) ||
       (this.form.get(field).untouched && this.formSubmitAttempt)
     );
   }
   onSubmit() {
     console.log(this.form.value.userName);
     //console.log(this.form.value.user);
     //this.formSubmitAttempt = true;
     if(this.form.value.type==3){
       this.authService.loginsa(this.form.value).subscribe(res => {
         if (res.success) {
           console.log(res);
           localStorage.setItem("loggedinas","Sysadmin");
           this.i=true;
this.router.navigate(['sa'])

         }
         else {
           this.prin="Wrong Username and password for System Administrator";
           console.log(res);
           console.log("sddsfs");
         }
       });
     }
     else if(this.form.value.type==1){
     this.authService.logIn(this.form.value)
      .subscribe(res => {
        if (res.success) {
          console.log(res);
         // if(this.form.value.type==1)
         // {
            localStorage.setItem("loggedinas","User");
            localStorage.setItem("username",this.form.value.userName);
            this.router.navigate(['chat']);
          //}
        }
        
        else if(res.status=="401"){
          this.prin="Wrong Username and password for User";
          console.log("pranshul");
        }
      });}
      else if(this.form.value.type==2){
        this.authService.logInp(this.form.value)
      .subscribe(res => {
        if (res.success) {
         localStorage.setItem("padminname",this.form.value.userName);
          
          //localStorage.setItem("category",res.prob);
          //this.cate=res.prob;
         // if(this.form.value.type==1)
         // {
         //   localStorage.setItem("loggedinas","User");
         //   this.router.navigate(['chat']);
          //}
          localStorage.setItem("loggedinas","Padmin");
          this.router.navigate(['padmin'])
        }
        else
        {
          this.prin="Wrong Username and password for User";
        }
      });

      }

     //console.log(this.ld);
     //this.form.reset();
   }
 }
