'use strict';

var mongoose = require('mongoose'),
    Vendor = mongoose.model('Vendor'),
    _ = require('lodash');

exports.index = function(req, res, next) {
    Vendor
        .find({})
        .exec(function(err, vendors) {
            if (err) return next (err);
            res.json({
                status: "success",
                data: vendors,
                message: null
            })
        })
};

exports.detail = function(req, res, next) {
    res.json({
        status: "success",
        data: req.vendor,
        message: null
    })
};

exports.create = function(req, res, next) {
    var vendor = new Vendor(req.body);
    vendor.save(function(err, vendor) {
        if (err) return next(err);
        res.json({
            status: "success",
            data: vendor,
            message: null
        })
    })
};

exports.update = function(req, res, next) {
    var data = _.assign(req.vendor, req.body);
    data = data.toObject();
    delete data._id;
    req.vendor.update(data, function(err, result) {
        if (err) return next(err);
        console.log(result);
        res.json({
            status: "status",
            data: result,
            message: null
        })
    })
};

exports.del = function(req, res, next) {
    req.vendor.remove(function(err) {
        if (err) return next(err);
        res.json({
            status: "success",
            data: null,
            message: null
        })
    })
};

exports.vendorsById = function(req, res, next, id) {
    Vendor
        .findById(id)
        .exec(function(err, vendor) {
            if (err) return next(err);
            req.vendor = vendor;
            next();
        });
};