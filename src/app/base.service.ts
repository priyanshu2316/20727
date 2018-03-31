import { Injectable } from '@angular/core';
import { Updatefor } from './updatefor';
import { Http } from '@angular/http';
interface problemdomain{
  cat: string;
  pa: string;
}

interface problem{
  name: string;
  cat: string;
  des: string;
}

@Injectable()
export class BaseService {

  constructor() { }
  getproblem() {
    let prob:problem[]=[
      {
        name:'Pranshul',
        cat:'Bekufi',
        des:''
      },

      {
        name:'Priya',
        cat:'Bekufi',
        des:''
      }
    ];

    return prob;
  }
  
  /*getproblemdomain() {
    let probdom:problemdomain[]=[
      {
        cat:'Electricity',
        pa:'Electrician'
      },

      {
        cat:'Bekufi',
        pa:'Koi nahi'
      },
      {
        cat:'Bekuf',
        pa:'Koi nahi'
      },
      {
        cat:'Beku',
        pa:'Koi nahi'
      },
      {
        cat:'Bek',
        pa:'Koi nahi'
      }
    ];
    return probdom;
  }*/
}
