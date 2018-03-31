const express=require('express');
const bodyparser=require('body-parser');
const cors=require('../configrations/cors');
const authenticate=require('../authenticate');
const multer=require('multer');
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'public/images');
  },
  filename:(req,file,cb)=>{
    cb(null,file.originalname);
  }
});
var prob=require('../models/video').w;
const imageFileFilter=(req,file,cb)=>{
 if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)){
   return cb(new Error('you can upload only image files!'),false);
 };
 cb(null,true);
};

const upload=multer({storage:storage,fileFilter:imageFileFilter});

const uploadrouter=express.Router();
uploadrouter.use(bodyparser.json());


uploadrouter.post('/upload/:_id',cors.corsWithOptions,upload.single('imageFile'),(req,res)=>{
  prob.findOne(req.params).then((probs)=>{
    probs.image='/images/'+req.file.filename;
    probs.save();
 res.statusCode=200;
 res.setHeader('Content-Type','application/json');
 res.json(req.file);
},(err)=>console.log(err))
.catch((err)=>console.log(err));


});


module.exports=uploadrouter;
