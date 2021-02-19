const bcrypt = require('bcrypt');

module.exports = {
  signUp: (req, res, next) => {
    res.send("Sign Up");
  },
  signIn: (req, res, next) => {
    res.send("Sign In");
  },
  signOut: (req, res, next) => {
    res.send("Sign Out");
  },
  forgot: (req, res, next) => {
    res.send("Forgot");
  },
  reset: (req, res, next) => {
    res.send("Reset");
  }
};

async function hashing(pwd) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pwd, salt);
}
