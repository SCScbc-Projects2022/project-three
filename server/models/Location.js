const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  intersection: {
    type: String,
    unique: true,
  },
  address: {
    type: Object,
    required: true,
  },
});

const Location = model('Location', locationSchema);

module.exports = Location;
