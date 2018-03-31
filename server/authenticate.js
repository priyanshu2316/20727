var passport=require('passport');
var LocalStrategy=require('passport-local').Strategy;
var genUser=require('./models/video').u;
var probAdmin=require('./models/video').v;
var JWTStrategy=require('passport-jwt').Strategy;
var ExtractJWT=require('passport-jwt').ExtractJwt;
var jwt=require('jsonwebtoken');
var config=require('./configrations/config.js');
exports.genlocal = passport.use('genlocal',new LocalStrategy(genUser.authenticate()));
passport.serializeUser(genUser.serializeUser());
passport.deserializeUser(genUser.deserializeUser());
exports.local = passport.use('local',new LocalStrategy(probAdmin.authenticate()));


passport.serializeUser(probAdmin.serializeUser());
passport.deserializeUser(probAdmin.deserializeUser());
exports.getToken=function(user){
  return jwt.sign(user,config.secretKey,
  {
    expiresIn:3600
  });
};
var opts={};
opts.jwtFromRequest=ExtractJWT.fromAuthHeaderAsBearerToken();//jwtFromRequest is predefinedddd
opts.secretOrKey=config.secretKey;
exports.jwtPassport=passport.use(new JWTStrategy(opts,(jwt_payload,done)=>{
console.log("jwt payload "+jwt_payload);
genUser.findOne({_id:jwt_payload._id},(err,user)=>{
  if(err)
  {
    return done(err,false);//done is callback of payload params error,user if any,any info
  }
  else if(user)
  {
    return done(null,user);
  }
  else{
    return done(null,false);
  }
});
}));//strategy  options,verify function
//done is callback provided by passport
exports.verifygenUser=passport.authenticate('jwt',{session:false});
exports.verifysysAdmin=(req,res)=>{
  if(req.body.username==config.username&&req.body.password==config.password)
  {
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    res.json("successs");
  }
  else{
    res.statusCode=401;
    res.setHeader('Content-Type','application/json');
    res.json("unauthorized");
  }
}
