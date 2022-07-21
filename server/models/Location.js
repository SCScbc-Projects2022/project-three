const { Schema, model } = require('mongoose');

const userSchema = require('./User');
const Company = require('./Company');

const locationSchema = new Schema({
  address: {
    type: Object,
    required: true,
    unique: true,
    trim: true,
  },
  storeId: Company,
  // employees: [userSchema],
});

const Location = model('Location', locationSchema);

module.exports = Location;
