module.exports = {
  // signUp: (req, res, next) => {},
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
  }
  // forgot: (req, res, next) => {},
  // reset: (req, res, next) => {}
};
