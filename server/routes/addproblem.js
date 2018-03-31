var express = require('express');
const bodyParser=require('body-parser');
//var genUser=require('../models/video').u;
var prob=require('../models/video').w;
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
router.post('/addproblem',cors.corsWithOptions,/*authenticate.verifygenUser,*/(req,res,next)=>{
  prob.create({"category":req.body.category,"username":req.body.username,"description":req.body.description,"location":req.body.location,"image":req.body.image,"dateS":date,"dateF":date1.setDate(date1.getDate()+7)})
  .then((probs)=>{

    probs.save();
    console.log("prob createddd "+prob);
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(probs);
  },(err)=>next(err))
  .catch((err)=>next(err));
});


module.exports = router;
