var express = require('express');
const bodyParser=require('body-parser');
//var genUser=require('../models/video').u;
var prob=require('../models/video').w;
var cat=require('../models/video').c;
//var PAdmin=require('../models/video').v;
var passport=require('passport');
var authenticate=require('../authenticate');
const cors=require('../configrations/cors');
//var validator=require('email-validator');
var config=require('../configrations/config');
var router = express.Router();
var jwt=require('jsonwebtoken');
router.use(bodyParser.json());
var date=new Date();
var date1=new Date();
router.post('/addproblem',cors.corsWithOptions,(req,res,next)=>{
  prob.create({"category":req.body.category,"username":req.body.username,"description":req.body.description,"newdate":date,"location":req.body.location,"image":req.body.image,"dateS":date,"dateF":date1.setDate(date1.getDate()+7),"padmin":req.body.padmin})
  .then((probs)=>{
  
    probs.diff=(probs.dateF-probs.dateS)/(1000*60*60*24);
    cat.findOne({"category":probs.category},(err,cat)=>{
   prob.find({"category":cat.category,"status":"Unsolved"},(err,le)=>{
     console.log("gggggggggggg"+le);
    if( le.length==1)
  {console.log("aaaaaaaaaaaaaa");
    cat.unsolved= 1;
    cat.solved=0;
    cat.save();
  }
  else{

    var a=cat.unsolved;
    console.log(a);
    a++;
    cat.unsolved=a;

cat.save();
      console.log(cat);
  }
})

  });
    probs.save();
    console.log("prob createddd "+prob);
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(probs);

  },(err)=>next(err))
  .catch((err)=>next(err));
});


module.exports = router;
