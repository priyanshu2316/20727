var express = require('express');
const bodyParser=require('body-parser');
var genUser=require('../models/video').u;
var PAdmin=require('../models/video').v;
var prob=require('../models/video').w;
var cat=require('../models/video').c;
var passport=require('passport');
var authenticate=require('../authenticate');
var router = express.Router();
var jwt=require('jsonwebtoken');
const config=require('../configrations/config');
const cors=require('../configrations/cors');
router.options('*',cors.corsWithOptions,(req,res)=>{res.sendStatus(200)});
router.get('/', cors.corsWithOptions,function(req, res, next) {
  res.send('respond with a resource');
});

router.use(bodyParser.json());
/* GET users listing. */
router.post('/loginsadmin',cors.corsWithOptions,(req,res)=>{
 if(req.body.username===config.username&&req.body.password===config.password)
  {
     console.log(req.username+" "+req.password);
    res.statusCode=200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, status: 'You are successfully logged in!'});

  }

});
router.post('/loginuser',cors.corsWithOptions, passport.authenticate('genlocal'), (req, res) => {
  var token=authenticate.getToken({_id:req.user._id});
  res.statusCode = 200;
 res.setHeader('Content-Type', 'application/json');
 res.json({success: true,token:token, status: 'You are successfully logged in!'});

});
router.post('/loginPadmin',cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
 var date=new Date();
  var token=authenticate.getToken({_id:req.user._id});
cat.findOne({"padmin":req.body.username}).then((padm)=>{
  prob.find({"category":padm.category},(err,prob)=>{
    console.log(prob.length);
    for(i=0;i<prob.length;i++)
  {  if(date>=prob[i].dateF)
    {
      console.log("if worksss");
      prob[i].status='solved';
      prob[i].save();
    }
  }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true,token:token, status: 'You are successfully logged in!',prob:padm.category});
  })},(err)=>console.log("teesra "+err))
.catch((err)=>console.log("fourth "+err));
});
router.get('/checkJWTToken',cors.corsWithOptions,(req,res)=>{
  passport.authenticate('jwt',{session:false},(err,user,info)=>{
    if(err)
      return next(err);
    if(!user){
      res.statusCode=401;
      res.setHeader('Content-Type','application/json');
      return res.json({status:'JWT Invalid!',success:false,err:info});
    }
    else{
      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      return res.json({status:'JWT valid!',success:true,user:user});
    }

  } )(req,res);
}); //to check is jwt expired
router.get('/getcat',cors.corsWithOptions,(req,res,next)=>{
cat.find({},{category:1}).then((cat)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.json(cat);
},(err)=>next(err))
.catch((err)=>next(err));

});


module.exports = router;
