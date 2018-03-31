var express = require('express');
const bodyParser=require('body-parser');
var genUser=require('../models/video').u;
var prob=require('../models/video').w;
var PAdmin=require('../models/video').v;
var cat=require('../models/video').c;
var tech=require('../models/video').t;
var loc=require('../models/video').l;
var passport=require('passport');
const cors=require('../configrations/cors');
var authenticate=require('../authenticate');
//var validator=require('email-validator');
var config=require('../configrations/config');
var router = express.Router();
var jwt=require('jsonwebtoken');
router.use(bodyParser.json());
router.post('/signupgenUser',/*authenticate.verifysysAdmin,*/(req,res,next)=>{
    genUser.register(new genUser({username:req.body.username,name:req.body.name,email:req.body.email,phone:req.body.phone,type:req.body.type}),
    req.body.password,(err,user)=>
  {
    if(err)
    {
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      console.log(err);
      res.json({err:err}+"galat errr");
  }
    else{
      user.save((err,user)=>{
        if(err)
        {
          res.statusCode=500;
          res.setHeader('Content-Type','application/json');
          res.json({err:err}+"this field is req");
          return;
        }
        passport.authenticate('genlocal')(req,res,()=>{
          res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json({success:true,status:'registration successfull'});
        });
      });

    }
  });
});

router.post('/signupPAdmin',/*authenticate.verifysysAdmin,*/(req,res,next)=>{
    PAdmin.register(new PAdmin({username:req.body.username,name:req.body.name,email:req.body.email,phone:req.body.phone})
    ,req.body.password,(err,user)=>
  {
    if(err)
    {
      res.statusCode=500;
      res.setHeader('Content-Type','application/json');
      res.json({err:err}+"galat errr");

    }
    else{
      user.save((err,user)=>{
        if(err)
        {
          res.statusCode=500;
          res.setHeader('Content-Type','application/json');
          res.json({err:err}+"sahierr");
          return;
        }
        passport.authenticate('local')(req,res,()=>{
          res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json({success:true,status:'registration successfull'});
        });
      });

    }
  });
});

router.post('/signupCat',/*authenticate.verifysysAdmin,*/(req,res,next)=>{
    cat.create({"category":req.body.category,"padmin":req.body.padmin})
    .then((cat)=>{

      cat.save();

      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json(cat);
    },(err)=>next(err))
    .catch((err)=>next(err));

    });

    router.post('/signupTechnician',/*authenticate.verifysysAdmin,*/(req,res,next)=>{
        tech.create({"name":req.body.name,"phone":req.body.phone,"specialisation":req.body.specialisation})
        .then((tech)=>{
          tech.save();
          res.statusCode=200;
          res.setHeader('Content-Type','application/json');
          res.json(tech);
        },(err)=>next(err))
        .catch((err)=>next(err));
        });

    router.post('/signuploc',cors.corsWithOptions,/*authenticate.verifygenUser,*/(req,res,next)=>{
      loc.create({"location":req.body.location})
      .then((loc)=>{

        loc.save();

        res.statusCode=200;
        res.setHeader('Content-Type','application/json');
        res.json(loc);
      },(err)=>next(err))
      .catch((err)=>next(err));
    });

router.delete('/deluser/:id',cors.corsWithOptions,(req,res,next)=>{
genUser.remove({"username":req.params.id})
.then((user)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.json(user);
},(err)=>next(err))
.catch((err)=>next(err));
});
router.delete('/delprob/:id',cors.corsWithOptions,(req,res,next)=>{
  PAdmin.remove({"username":req.params.id})
  .then((user)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(user);
  },(err)=>next(err))
  .catch((err)=>next(err));
  });


  router.post('/setadmin/:id',cors.corsWithOptions,(req,res)=>{

    cat.findById(req.params.id).then((cat)=>
    {
      cat.padmin=req.body.padmin;
      cat.save();

      res.statusCode=200;
      res.setHeader('Content-Type','application/json');
      res.json({success: true, status:'admin added successfully'});

   },(err)=>console.log("teesra "+err))
  .catch((err)=>console.log("fourth "+err));

  });

  router.get('/getadmin',cors.corsWithOptions,(req,res,next)=>{
  PAdmin.find({}).then((admin)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json(admin);
  },(err)=>next(err))
  .catch((err)=>next(err));

  });

module.exports = router;
