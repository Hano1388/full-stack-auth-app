const jwt  = require('jwt-simple'),
      User = require('../models/user'),
      config = require('../config');

const userToken = user => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    // NOTE: you can add email & password validations here
    return res.status(422).send({ error: 'You must provide email and password '});
  }
  // See if a user with the given email exist
  User.findOne({ email }, (err, userExist) => {
    if (err) { return next(err); }
    // If a user with the given email exist, return an error
    if(userExist) {
      return res.status(422).send({ error: 'Email is already in use' });
    }
    // If no users exist with the given email, create and save a user record with the given email
    const user = new User({ email, password });

    user.save(err => {
      if(err) { return next(err); }
      // Finally, respond to the request indicating the user was created
      res.json({ token: userToken(user) });
    });
  });
}
