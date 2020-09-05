export const checkAuth = (req, res, next) => {
  //   if (req.isAuthenticated()) {
  // next();
  //   }

  next();

  // res.redirect("/signin");
};

export const checkNotAuth = (req, res, next) => {
  // if (req.isAuthenticated()) {
  //   return res.redirect('/admin');
  // }

  next();
};
