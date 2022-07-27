const { Schema, model } = require('mongoose');

const roleSchema = new Schema(
  {
    role: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Role = model('Role', roleSchema);

module.exports = Role;
