'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    counter;

var counterSchema = new Schema({
    model: {
        type: String,
        require: true
    },
    field: {
        type: String,
        require: true
    },
    count: {
        type: Number,
        default: 1
    }
});

counterSchema.index({ field: 1, model: 1 }, { unique: true, required: true, index: -1 });

module.exports = mongoose.model('Counter', counterSchema);