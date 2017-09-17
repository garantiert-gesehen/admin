const bcrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, lowercase: true, required: true},
  password: { type: String },

  profile: {
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    picture: { type: String, default: ''},
  },

  isAdmin: { type: Boolean },
  isOwner: { type: Boolean },
  isScout: { type: Boolean },
  isManager: { type: Boolean },

  // ownerProfile: {
  //   location: { type: mongoose.Schema.Types.ObjectId, ref: 'Location' },
  //   bank: { ... }
  // },
  // scoutProfile, managerProfile

  tokens: Array,
  resetPasswordToken: String,
  resetPasswordExpires: Date
});


/**
 * Password hash middleware.
 */
UserSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(5, function(err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

/*
 Defining our own custom document instance method
 */
UserSchema.methods = {
  comparePassword: function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) {
        return cb(err);
      }
      cb(null, isMatch);
    })
  }
};

/**
 * Statics
 */

UserSchema.statics = {};

module.exports = mongoose.model('User', UserSchema);
module.exports.UserSchema = UserSchema;
