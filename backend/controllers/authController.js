module.exports = {
 signUp: (req, res, next) => {},
 signIn: (passport) => {
  (req, res, next) => {
   passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/signin",
    successFlash: "Sign In Succcessful",
    failureFlash: true,
   });
  };
 },
 signOut: (req, res, next) => {
  req.logOut();
  res.redirect("/signin");
 },
 forgot: (req, res, next) => {},
 reset: (req, res, next) => {},
};
