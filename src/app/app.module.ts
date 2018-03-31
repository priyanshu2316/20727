import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpModule}from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule,MatButtonModule ,MatIconModule,MatTabsModule,MatListModule,MatInputModule,MatCardModule,MatRadioModule, MatSlideToggleModule} from '@angular/material';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VideocentreComponent } from './videocentre/videocentre.component';
import{Routes,RouterModule} from '@angular/router';
import { VideolistComponent } from './videolist/videolist.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import 'hammerjs';
import { SysadComponent } from './sysad/sysad.component';
import {ChproComponent} from './chpro/chpro.component';
import {ChusrComponent} from './chusr/chusr.component';
import {ChtComponent} from './cht/cht.component';
import {PadminComponent} from './padmin/padmin.component';
import { RemusrComponent } from './remusr/remusr.component';
import { RemadminComponent } from './remadmin/remadmin.component';
import{UserService} from'./user.service';
import { LogvarService } from './logvar.service';
import { AdashComponent } from './adash/adash.component';
import { MyprobComponent } from './myprob/myprob.component';
import { CategComponent } from './categ/categ.component';
import { LocatComponent } from './locat/locat.component';
import { BarComponent } from './bar/bar.component';
import {ChartsModule} from 'ng2-charts';

import { ChtecComponent } from './chtec/chtec.component';
import { ViewtechComponent } from './viewtech/viewtech.component';
const routes: Routes=[
  {
    path:'',
    redirectTo:"/login",pathMatch:"full"
  },
  {
    path:'home',
    component:HomeComponent
  },

    {
      path:'chat',
      component:ChtComponent
    },
  
  {
    path:'videos',
    component:VideocentreComponent
  },
  {
    path:'videolist/:category',
    component:VideolistComponent
  },
  {
    path:'sa',
    component:SysadComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sa/chpro',
    component:ChproComponent
  },
  {
    path:'sa/chusr',
    component:ChusrComponent
  },
  {
    path:'sa/chcat',
    component:CategComponent
  },
  {
    path:'usr/cht',
    component:ChtComponent
  },
  {
    path:'padmin',
    component:PadminComponent
  },
  {
    path:'sa/remusr',
    component:RemusrComponent
  },
  {
    path:'sa/remadmin',
    component:RemadminComponent
  },
  {
    path:'myprob',
    component:MyprobComponent
  },
  {
    path:'sa/chloc',
    component:LocatComponent
  },
  {
    path:'sa/viewanalysis',
    component:BarComponent
  },
  {
    path:'sa/technician',
    component:ChtecComponent
  },
  {
    path:'padmin/technician',
    component:ViewtechComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VideocentreComponent,
    VideolistComponent,
    LoginComponent,
    SysadComponent,
    ChproComponent,
    ChtComponent,
    ChusrComponent,
    PadminComponent,
    RemusrComponent,
    RemadminComponent,
    AdashComponent,
    MyprobComponent,
    CategComponent,
    LocatComponent,
    BarComponent,
    ChtecComponent,
    ViewtechComponent
  ],
  imports: [
    ChartsModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
MatRadioModule,
  BrowserAnimationsModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  FlexLayoutModule,
  MatTabsModule,
  MatListModule,
  MatGridListModule,
  MatToolbarModule,
  HttpClientModule,
  FormsModule,
 MatSlideToggleModule,
  MatCardModule,MatInputModule
  ],
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true,
      },AuthService,UserService,LogvarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
