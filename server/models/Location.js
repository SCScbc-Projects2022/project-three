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
        street: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        city: {
            type: String,
            required: true,
            trim: true
        },
        country: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: Number,
            required: true,
            trim: true
        },
        employees: [userSchema]
    }
)

module.exports = Location;