import passportLocal from 'passport-local';
import User from '../models/user';
const LocalStrategy = passportLocal.Strategy;

const local = new LocalStrategy({
  usernameField : 'email'
}, function(email, password, done) {
  User.findOne({ email: email}, function(err, user) {
    if(!user) return done(null, false, { message: 'wrongCombination'});
    user.comparePassword(password, function(err, isMatch) {
      if(isMatch) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'wrongCombination'});
      }
    });
  });
});


module.exports = function(app, passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  //use the following strategies
  passport.use(local);
};
