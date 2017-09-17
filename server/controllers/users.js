const _ = require('lodash');
const User = require('../models/user');
const passport = require('passport');
const emailRegexp = /^.+\@.+\..+/i;

/**
 * POST /api/login
 */
exports.postLogin = (req, res, next) => {
  // Do email and password validation for the server
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message});
    }
    // Passport exposes a login() function on req (also aliased as
    // logIn()) that can be used to establish a login session
    req.logIn(user, (err) => err
      ? res.status(401).json({message: err})
      : res.status(200).json({
          user: {id: user.id, email: user.email, profile: user.profile},
          message: 'You have been successfully logged in.'
        })
    );
  })(req, res, next);
};


/**
 * POST /api/logout
 */
exports.postLogout = (req, res) => {
  // Do email and password validation for the server
  req.logout();
  res.redirect('/');
};

/**
 * POST /api/signup
 * Create a new local account
 */
exports.postSignUp = (req, res) => {
  const user = new User({
    email: req.body.email,
    password: req.body.password,
    profile: {
      firstName: req.body.firstName,
      lastName: req.body.lastName
    }
  });

  if (!emailRegexp.test(req.body.email)) {
    return res.status(400).json({ message: { email: { kind: 'wrongEmail' } } });
  }
  if (!req.body.password) {
    return res.status(400).json({ message: { password: { kind: 'required' } } });
  }
  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if(existingUser) {
      return res.status(409).json({ message: { email: { kind: 'userAlreadyExists' } } } );
    }
    user.save(err => {
      if(err) {
        return res.status(400).json({ message: err.errors });
      }
      req.logIn(user, err => err
        ? res.status(401).json({ message: err })
        : res.status(200).json(
          {
            user: { id: user.id, email: user.email, profile: user.profile },
            message: 'You have been successfully logged in.'
          }
        )
      );
    });
  });
};
