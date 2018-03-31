const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
var passport=require('passport');
const api=require('./server/routes/api');
const user=require('./server/routes/user');
const probsim=require('./server/routes/upload');
const feedback=require('./server/routes/feedback');
const prob=require('./server/routes/addproblem');
const sign=require('./server/routes/sign');
const mail=require('./server/routes/email');
//const notify=require('./server/routes/notify');


//const push=require('../push-notifications/app/scripts/main');
const port=3000;
const app=express();

app.use(express.static( path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use('/api', api);
app.use('/user', user);
app.use('/sign',sign);
app.use('/probsim',probsim);
app.use('/feedback',feedback);
app.use('/prob',prob);
app.use('/mail',mail);
//app.use('/notify',notify);



//app.use('/',push);
app.get('*',(req,res) =>{
  res.sendFile(path.join(__dirname,'dist/index.html'));

});

app.listen(port,function(){
  console.log("hey how ya doisdkef");
});
