//import { Number } from "core-js";

/*const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const videoschema=new Schema({
title:{
type:String,
required:true
},
url:{
  type:String,
required:true
},
description:{
  type:String,
 required:true
}});

module.exports=mongoose.model('video',videoschema,'videos');

//module.exports=mongoose.model('prob',prob);*/
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
//const validator = require('mongoose-validators');
var passportLocalMongoose=require('passport-local-mongoose');
const problemadmin=new Schema({
name:{
type:String,
required:true
},
email:{
  type:String,
 required:true
},
phone:{
  type:String,
  required:true
}
},{
  timestamps:true
});
const technician=new Schema({
  name:{
    type:String
  },
  phone:{
    type:String
  },
  specialisation:{
    type:String
  }
})
const category=new Schema({
  category:{
    type:String
  },
  padmin:{
    type:String,
    default:'No Admin'
  },
  solved:{
    type:Number

  },
  unsolved:{
    type:Number

  },
  mean:{
    type:Number
  }

})

const location=new Schema({
  location:{
    type:String
  }
})
const genUser=new Schema({
name:{
  type:String,
 required:true
},
email:{
type:String,
required:true
//validate:validator.isEmail()

},
phone:{
  type:String,
  required:true
},
type:{
  type:String,
  required:true
}
},{
  timestamps:true
});


const prob=new Schema({
  category:{
    type:String,
    required:true
  },
  username:{
    type:String
  },
  description:{
    type:String,
   required:true
  },
  image:{
 type:String
  },
  status:{
    type:String,
    default:'Unsolved'
  },
  dateS:{
    type: Date
  },
  dateF:{
    type:Date
  },
  newdate:{
    type:Date
  },
  padmin:{
    type:String
  },
  location:{
    type:String
  },
  diff:{
    type:Number
  }
},{
  timestamps:true

});

const padminnot=new Schema({
  id:{
    type:String
  },
  category:{
    type:String
  },
  description:{
    type:String
  }
});
const usernot=new Schema({
  id:{
    type:String
  },
  pid:{
    type:String
  },
  category:{
    type:String
  }
});


genUser.plugin(passportLocalMongoose);
var u=mongoose.model('genUser',genUser);
problemadmin.plugin(passportLocalMongoose);
var v=mongoose.model('PAdmin',problemadmin);
//prob.plugin(passportLocalMongoose);
var w=mongoose.model('Prob',prob);
var x=mongoose.model('padminnot',padminnot);
var y=mongoose.model('usernot',usernot);
var c=mongoose.model('category',category);
var l=mongoose.model('location',location);
var t=mongoose.model('technician',technician);
module.exports.u=u;
module.exports.v=v;
module.exports.w=w;
module.exports.x=x;
module.exports.y=y;
module.exports.c=c;
module.exports.l=l;
module.exports.t=t;
