'use strict';

var Vendor = require('../../models/vendor.model.js'),
    Counter = require('../../lib/plugins/counter/counter.model.js'),
    async = require('async'),
    _ = require('lodash'),
    mongoose = require('mongoose');

describe('Vendor model unit tests:', function() {
    before(function() {
        mongoose.connect('mongodb://localhost/quickie-order-test');
    });

    after(function() {
        mongoose.disconnect();
    });

    beforeEach(function(done) {
        Vendor.remove(function() { done() });
    });

    beforeEach(function(done) {
        Counter.remove(function() { done() });
    });

    afterEach(function(done) {
        Vendor.remove(function() { done() });
    });

    afterEach(function(done) {
        Counter.remove(function() { done() });
    });

    it('should not throw any errors when the plugin is activated', function(done) {
        var results = [];
        async.times(100, function(n, next) {
            var vendor = new Vendor({});
            vendor.save(function(err, savedVender) {
                expect(results.indexOf(savedVender.venderId)).to.equal(-1);
                results.push(savedVender.venderId);
                next();
            })
        }, function(err) {
            done();
        })
    });
});