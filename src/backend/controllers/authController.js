const mongoose = require('mongoose');
const User = require('../models/user');

module.exports = {
  signUp: async (req, res, next) => {
    const {first_name, last_name, email, password} = req.body;
    const _id = mongoose.Types.ObjectId();
    try {
      const genUser = await User.create({_id, first_name, last_name, email, password});

      res.status(201).json({
        success: true,
        user: genUser
      })
    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message
      })
    }
  },
  signIn: async (req, res, next) => {
    const {email, password} = req.body;

    if(!email || !password) {
      res.status(400).json({
        success: false,
        error: "Please provide an email and password"
      });
    }

    try {
      const user = await User.findOne({email}).select("+password");

      if(!user) {
        res.status(404).json({
          success: false,
          error: "Invalid credentials"
        });
      }

      const isMatch = await user.comparePasswords(password);

      if(!isMatch) {
        res.status(404).json({
          success: false,
          error: "Invalid credentials"
        });
      }

      res.status(201).json({
        success: true,
        token: "afdaklb3nl243trwl4en",
        user: user
      })

    } catch (err) {
      res.status(500).json({
        success: false,
        error: err.message
      });
    }
  },
  signOut: async (req, res, next) => {
    res.send("Sign Out");
  },
  forgot: async (req, res, next) => {
    res.send("Forgot");
  },
  reset: async (req, res, next) => {
    res.send("Reset");
  }
};