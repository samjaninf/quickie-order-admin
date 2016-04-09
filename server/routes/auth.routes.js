'use strict';

var auth = require('../controllers/auth.controller.js');

module.exports = function(app) {
    app.post('/api/register', auth.register);
    app.post('/api/login', auth.login);
};