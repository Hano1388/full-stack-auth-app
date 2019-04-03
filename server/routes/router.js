const Authentication   = require('../controllers/authentication'),
      passportServives = require('../services/passport'),
      passport         = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = app => {
  app.get('/', requireAuth, function(req, res) {
    res.send({ test: 'worked! :)' });
  });
  app.post('/signup', Authentication.signup);
}
