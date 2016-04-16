'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    counter = require('../lib/plugins/counter/counter.plugin.js');

var VendorSchema = new Schema({
    venderId: {
        type: String,
        unique: true
    },
    name: String,
    description: String,
    media: {
        logo: String,
        image: String
    },
    phone: String,
    address: {
        country: String,
        locality: String,
        postalCode: String,
        region: String,
        streetAddress: String,
        coordinates: {
            type: [Number],
            index: '2dspere'
        }
    },
    categories: [String]
});

VendorSchema.plugin(counter, { model: 'vendor', field: 'venderId', prefix: true});

module.exports = mongoose.model('Vendor', VendorSchema);