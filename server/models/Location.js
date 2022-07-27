const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  intersection: {
    type: String,
  },
  address: {
    type: Object,
    required: true,
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Location = model('Location', locationSchema);

module.exports = Location;
