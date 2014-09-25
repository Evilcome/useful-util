/**
 * Module for password crypt, compare, and create check token.
 * Why use bcrypt instead of crypto from nodejs itself:
 * http://stackoverflow.com/a/14015883/1015046
 */
var bcrypt = require('bcrypt');

module.exports.crypt = function (password, callback) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err)
      return callback(err);

    bcrypt.hash(password, salt, function (err, hash) {
      return callback(err, hash);
    });
  });
};

module.exports.compare = function (password, userPassword, callback) {
  bcrypt.compare(password, userPassword, function (err, isPasswordMatch) {
    if (err)
      return callback(err);
    return callback(null, isPasswordMatch);
  });
};
