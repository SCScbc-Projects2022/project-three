const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  address: {
    type: Object,
    required: true
  },
  intersection: {
    type: String
  },
  companyId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Company',
    },
  ],
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});

const Location = model('Location', locationSchema);

module.exports = Location;
