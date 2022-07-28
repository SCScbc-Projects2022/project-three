const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  intersection: {
    type: String,
  },
  address: {
    type: Object,
    required: true,
  },
});

const Location = model('Location', locationSchema);

module.exports = Location;
