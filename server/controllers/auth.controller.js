'use strict';

// @link http://www.sitepoint.com/user-authenication-mean-stack/
var passport = require('passport'),
    mongoose = require('mongoose'),
    Users = mongoose.model('Users');

exports.register = function(req, res, next) {
    var user = new Users();

    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function(err) {
        var token;
        token = user.generateJwt();
        res.status(200);
        res.json({
            "token" : token
        });
    });
};

exports.login = function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
        var token;

        // If Passport throws/catchs an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if(user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            // If user is not found
            res.status(401).json(info)
        }
    })(req, res);
};