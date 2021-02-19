const bcrypt = require('bcrypt');

module.exports = {
  signUp: (req, res, next) => {},
  signIn: (passport) => {
  },
  signOut: (req, res) => {
  },
  forgot: (req, res, next) => {},
  reset: (req, res, next) => {}
};

async function hashing(pwd) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pwd, salt);
}
