module.exports = {
 checkAuth: (req, res, next) => {
  //   if (req.isAuthenticated()) {
  return next();
  //   }

  //   res.redirect("/signin");
 },
 checkNotAuth: (req, res, next) => {
  //   if (req.isAuthenticated()) {
  //    return res.redirect("/admin");
  //   }

  return next();
 },
};
