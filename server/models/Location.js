const { Schema, model } = require('mongoose');

const userSchema = require('./User');

const locationSchema = new Schema(
    {
        // meant to hold a store or chain or location number
        location: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        address: {
            type: Object,
            required: true,
            unique: true
        },
        employees: [userSchema]
    }
);

const Location = model('Location', locationSchema);

module.exports = Location;