const Authentication   = require('../controllers/authentication'),
      passportServives = require('../services/passport'),
      passport         = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.get('/', requireAuth, function(req, res) {
    res.send({ test: 'worked! :)' });
  });
  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
