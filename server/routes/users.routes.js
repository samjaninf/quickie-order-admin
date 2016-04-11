'use strict';

var users = require('../controllers/users.controller.js'),
    jwt = require('express-jwt'),
    config = require('../config/config.js');

var auth = jwt({
    secret: config.tokenSecret,
    userProperty: 'payload'
});

module.exports = function(app) {
    app.get('/api/users', auth, users.detail); // missing :userId
};