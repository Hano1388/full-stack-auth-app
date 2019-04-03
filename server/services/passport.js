const passport     = require('passport'),
      User         = require('../models/user'),
      config       = require('../config'),
      JwtStrategey = require('passport-jwt').Strategy,
    { ExtractJwt } = require('passport-jwt');

const LocalSrategy = require('passport-local');
// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalSrategy(
  localOptions, function(email, password, done) {
    // Verify this email and password
    // call done with user if it is the correct email and password
    // Otherwise, call done with false
    User.findOne({ email }, function(err, user) {
      if(err) { return done(err); }
      if(!user) { return done(null, false); }

      // compare passwords - is 'password' equal to user.password?
      user.comparePassword(password, function(err, isMatch) {
        if (err) { return done(err); }
        if(!isMatch) { return done(null, false); }

        return done(null, user);
      });
    });
});
// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategey(jwtOptions, function(payload, done) {
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that
  // Otherwise, call done without a user object
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false) }
    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this Strategy
passport.use(jwtLogin);
passport.use(localLogin);
