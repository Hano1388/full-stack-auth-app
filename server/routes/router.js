const Authentication   = require('../controllers/authentication'),
      passportServives = require('../services/passport'),
      passport         = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  // for any other route to provide authentication, just add requireAuth
  // requireAuth prevents unauthorized users from accessing any route that we add
  app.get('/', requireAuth, function(req, res) {
    res.send({ test: 'worked! :)' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
