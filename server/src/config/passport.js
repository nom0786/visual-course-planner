const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs'); 

//user model
const User = require('../models/User');
const user = new User();

module.exports = function(passport){
//local strategy

passport.use(new LocalStrategy(function(email, password, done){
 // match email
 try{
    const existUser = await user.checkUser(email);
  }
  catch(err) {
    res.status(500).send("Error with db." + err);
  } 
  if(existUser === false){
      return done(null, false, {message: 'no user found'});
  }else{
      const existUser = user.getUser(email);// probably not the right way to do it
    bcrypt.compare(password, existUser.password, function(err, isMatch){ // can do existUser.password lol need to assign my result in a callback?
    if(err) throw err;
    if(isMatch){
        return done(null,);
    }else{
        
    }
 });

  }
}));

}

//basically how can i access each elememt indivdually then continue coding 