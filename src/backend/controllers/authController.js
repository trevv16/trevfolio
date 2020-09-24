const bcrypt = require('bcrypt');

module.exports = {
  signUp: (req, res, next) => {},
  signIn: (passport) => {
    passport.authenticate('local', {
      successRedirect: '/admin',
      failureRedirect: '/signin',
      successFlash: 'Sign In Succcessful',
      failureFlash: true
    });
  },
  signOut: (req, res) => {
    req.logOut();
    res.redirect('/signin');
  },
  forgot: (req, res, next) => {},
  reset: (req, res, next) => {}
};

async function hashing() {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(querypassword, salt);
}
