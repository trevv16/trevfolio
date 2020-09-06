module.exports = {
  checkAuth: (req, res, next) => {
    //   if (req.isAuthenticated()) {
    // next();
    //   }

    next();

    // res.redirect("/signin");
  },
  checkNotAuth: (req, res, next) => {
    // if (req.isAuthenticated()) {
    //   return res.redirect('/admin');
    // }

    next();
  }
};
