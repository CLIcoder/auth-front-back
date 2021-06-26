const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const User = require("../../Model/User");
const db = require("../../confiq/db").secret;

/**
 * @route POST api/users/register
 * @desc register the user
 * @access Public
 */

router.post("/register", (req, res) => {
  let { email, password, confirm_password } = req.body;

  if (password != confirm_password) {
    return res.status(404).json({
      msg: "Password do not match!",
    });
  }

  User.findOne({
    //unique email
    email: email,
  }).then((user) => {
    if (user) {
      return res.status(404).json({
        msg: "Email already registred",
      });
    }
  });

  let newUser = new User({
    email,
    password,
  });

  // Hash password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser.save().then((user) => {
        return res.status(200).json({
          success: true,
          msg: "User is now registered",
        });
      });
    });
  });
});

/**
 * @route POST api/users/login
 * @desc Signing in the user
 * @access Public
 */

router.post("/login", (req, res) => {
  User.findOne({
    email: req.body.email,
  }).then((user) => {
    if (!user) {
      return res.status(404).json({
        msg: "Email not found!",
        success: false,
      });
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (isMatch) {
        // send user token
        const payload = {
          _id: user._id,
          email: user.username,
        };
        jwt.sign(
          payload,
          db,
          {
            expiresIn: 604800,
          },
          (err, token) => {
            res.status(200).json({
              succes: true,
              token: `Bearer ${token}`,
              msg: "You are now logged in",
            });
          }
        );
      } else {
        return res.status(404).json({
          msg: "Incorrect Password",
          succes: false,
        });
      }
    });
  });
});

/**
 * @route GET api/users/profile
 * @desc return the user data
 * @access privat
 */

module.exports = router;
