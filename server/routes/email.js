var nodemailer = require('nodemailer');
var prob=require('../models/video').w;
var genUser=require('../models/video').u;
var express = require('express');
const bodyParser=require('body-parser');

var router = express.Router();
router.post('/',(req,res)=> {

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yashitagoswami1@gmail.com',
      pass: 'bhuljatihu'
    }
  });
genUser.findOne({"username":req.body.username})
.then((user)=>{
  var email=user.email;
  prob.findOne({"_id":req.body.id},(err,prob)=>{

    var desc=prob.description;

    var mailOptions = {
      from: 'yashitagoswami1@gmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'Your problem with the description '+desc+' has been solved. Please give your feedback.'
    };

    transporter.sendMail(mailOptions, function(error, info){

      if (error) {
        console.log("error aya "+error);
      } else {
        console.log('Email sent: ' + info.response);

      }
      res.json("QWEqeq");
    });

})},(err)=>console.log(err))
  .catch((err)=>console.log(err));
});

module.exports=router;
