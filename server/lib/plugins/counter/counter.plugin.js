'use strict';

var Counter = require('./counter.model.js');

/**
 *
 * @param schema
 * @param {object} options
 *
 * var options = {
 *  field: '', // type string the field that is being updated
 *  model: '', // type string the model containing the counter
 *  prefix: '' // type boolean is the field prefixed with the model string?
 * }
 */

module.exports = function (schema, options) {

    // Set some defaults
    var model = options.model || null;
    var field = options.field || '_id';
    var prefix = options.prefix || false;

    if (model === null) throw new Error ('model must be set');

    schema.pre('save', function(next) {
        var document = this;

        Counter.findOneAndUpdate({ model: model, field: field}, {$inc: { count: 1}}, {upsert: true, new: true}, function (err, counter) {
            if (err) return next(err);
            document[field] = prefix ? model + counter.count : counter.count;
            next();
        })
    })
};