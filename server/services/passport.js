const passport = require('passport'),
      User     = require('../models'),
      config   = require('../config');

const { Strategy as: JwtStrategey, ExtractJwt } = require('passport-jwt');

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
