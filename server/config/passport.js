'use strict';

var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    mongoose = require('mongoose'),
    Users = mongoose.model('Users');

passport
    .use(new LocalStrategy({
        usernameField: 'email'
    },
    function(username, password, callback) {
        Users.findOne({ email: username }, function(err, user) {
            if (err) return callback(err);

            // Return if user not found in database
            if (!user) {
                return callback(null, false, {
                    message: 'User not found'
                });
            }

            // Return if password is wrong
            if (!user.validPassword(password)) {
                return callback(null, false, {
                    message: 'Password is wrong'
                });
            }

            // If credentials are correct, return the user object
            return callback(null, user);
        });
    }));