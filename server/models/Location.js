const { Schema, model } = require('mongoose');

const locationSchema = new Schema({
  address: {
    type: Object,
  },
<<<<<<< HEAD
  storeId: Company,
  // employees: [userSchema],
=======
  storeId: [
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
>>>>>>> develop
});

const Location = model('Location', locationSchema);

module.exports = Location;
