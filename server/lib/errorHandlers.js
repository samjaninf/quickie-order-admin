'use strict';

var config = require('../config/config.js');

// Look to anthenticationerror.js inside passport.js to see how to build a error type
// @link https://www.safaribooksonline.com/blog/2014/03/12/error-handling-express-js-applications/
module.exports = function(app) {

    // [SH Catch unauthorised errors
    app.use(function(err, req, res, next) {
        if (err.name === 'UnathorizedError') {
            res.status(401);
            res.json({
                status: "error",
                data: null,
                message: err.name + ": " + err.message
            });
        } else {
            next(err);
        }
    });

    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
        app.use(function(err, req, res, next) {
            console.log(err);
            res.status(err.status || 500);
            res.json({
                status: "error",
                data: null,
                message: err.message,
                error: err
            })
        })
    }

    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.json({
            status: "error",
            data: null,
            message: err.message,
            error: {}
        })
    })
};