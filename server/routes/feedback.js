var express = require('express');
const bodyParser=require('body-parser');
var prob=require('../models/video').w;

var router = express.Router();

const cors=require('../configrations/cors');

router.use(bodyParser.json());
/* GET users listing. */
router.get('/myprob/:username',cors.corsWithOptions,(req,res,next)=>{
prob.find({"username":req.params.username}).then((prob)=>{
  res.statusCode=200;
  res.setHeader('Content-Type','application/json');
  res.json(prob);
},(err)=>next(err))
.catch((err)=>next(err));

});

/*
router.get('/myprob/:username',function(req,res){
  console.log("get request");
  prob.find({"username":req.params.username})
  .exec((err,prob)=>{
    if(err){
      console.log("dfgcbcfzfbc"+req.params.username);
    }
    else{
      res.json(prob);
    }

});
});
*/
router.post('/feed/:_id',cors.corsWithOptions,(req,res)=>{

  prob.findById(req.params._id).then((probs)=>
  { 
    
        
       probs.status='solved';
         
         probs.save();
    
      res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success: true, status:'thanks for your valuable feedback'});

 },(err)=>console.log("teesra "+err))
.catch((err)=>console.log("fourth "+err));

});
/*router.post('/feed/:_id',cors.corsWithOptions,(req,res)=>{

  prob.findById(req.params._id)
  .then((probs)=>
  {
    cat.findOne({"category":probs.category},(err,cat)=>{

     probs.dateF=new Date();
      console.log(req.body.feed+" if workss")
       probs.status='solved';

       cat.solved=cat.solved + 1;
          cat.unsolved=cat.unsolved - 1;
         console.log(probs);
         probs.save();
         cat.save();


     })
      res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success: true, status:'thanks for your valuable feedback'});

 },(err)=>console.log("teesra "+err))
.catch((err)=>console.log("fourth "+err));
});
router.post('/feedno/:_id',cors.corsWithOptions,(req,res)=>{

  prob.findById(req.params._id).then((probs)=>
  {

      cat.findOne({"category":probs.category},(err,cat)=>{



             probs.dateF=null;
             probs.dateS=new Date();

       probs.status='unsolved';
       cat.unsolved=cat.unsolved + 1;
       
       probs.save();
       cat.save();

});
      res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success: true, status:'thanks for your valuable feedback'});

 },(err)=>console.log("teesra "+err))
.catch((err)=>console.log("fourth "+err));

});
*/


router.post('/feedno/:_id',cors.corsWithOptions,(req,res)=>{

  prob.findById(req.params._id).then((probs)=>
  { 
    
        
       probs.status='unsolved';
         
         probs.save();
    
      res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success: true, status:'thanks for your valuable feedback'});

 },(err)=>console.log("teesra "+err))
.catch((err)=>console.log("fourth "+err));

});

/*router.post('/feedre/:_id',cors.corsWithOptions,(req,res)=>{

  prob.findById(req.params._id).then((probs)=>
  { 
    
        
       probs.status='review';
         
         probs.save();
    
      res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json({success: true, status:'thanks for your valuable feedback'});

 },(err)=>console.log("teesra "+err))
.catch((err)=>console.log("fourth "+err));

});
*/

module.exports = router;
