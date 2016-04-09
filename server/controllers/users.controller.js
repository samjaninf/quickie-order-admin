'use strict';

var mongoose = require('mongoose'),
    Users = mongoose.model('Users');

exports.detail = function(req, res, next) {

    // If no user ID exists in the JWT return a 401
    if (!req.payload._id) {
        var error = new Error("UnauthorizedError: private profile");
        error.status = 401;
        next(error);
    } else {
        Users
            .findById(req.payload._id)
            .exec(function(err, user) {
            res.status(200).json({
                status: "success",
                data: user,
                message: null
            });
        });
    }
};