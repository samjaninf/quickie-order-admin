'use strict';


var vendors = require('../controllers/vendors.controller.js');

// Define the routes module's method
module.exports = function(app) {
    app.route('/api/vendors')
        .get(vendors.index)
        .post(vendors.create);

    app.route('/api/vendors/:vendorId')
        .get(vendors.detail)
        .put(vendors.update)
        .delete(vendors.del);

    app.param('vendorId', vendors.vendorsById);
};