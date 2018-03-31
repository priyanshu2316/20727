const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const category=require('../models/video').c;
const prob=require('../models/video').w;
const loc=require('../models/video').l;
const tech=require('../models/video').t;
const url="mongodb://localhost:27017/me";
const connect=mongoose.connect(url,{useMongoClient:true});
connect.then((db)=>{console.log("connected correctly");}
,(err)=>{console.log(err);});


router.get('/videos',function(req,res){
  console.log("get request");
  category.find({})
  .exec((err,cat)=>{
    if(err){
      console.log(err);
    }
    else{
      res.json(cat);
    }

});
});



router.get('/videos/:padmin',function(req,res){
  console.log("get request");
  prob.find({"padmin":req.params.padmin})
  .exec((err,probs)=>{
    if(err){
      console.log(err);
    }
    else{
      res.json(probs);
    }

});
});
router.get('/getloc',function(req,res){

  loc.find({})
  .exec((err,locs)=>{
    if(err){
      console.log(err);
    }
    else{
      res.json(locs);
    }

});
});
router.get('/getgraph',function(req,res){
  category.find({})
  .then((cat)=>{
    console.log(cat);
    res.json(cat);


},(err)=>next(err))
.catch((err)=>next(err));
});



router.get('/videosc/:id',function(req,res){
  console.log("get request for 1");
  prob.find({"category":req.params.id})
  .exec((err,video)=>{
    if(err){
      console.log("dfgcbcfzfbc");
    }
    else{
      res.json(video);
    }

});
});

router.get('/getTechnician',function(req,res){
  console.log("get request");
  tech.find({})
  .exec((err,tech)=>{
    if(err){
      console.log(err);
    }
    else{
      res.json(tech);
    }
});
});
router.post('/video',function(req,res){
  console.log("post a video");
  var newVideo=new video();
  newVideo.title=req.body.title;
  newVideo.url=req.body.url;
  newVideo.description=req.body.description;
  newVideo.save((err,insertedVideo)=>{
    if(err){
      console.log("errrreeer");
    }
    else{
      res.json(insertedVideo);
    }
  });
});


module.exports=router;
