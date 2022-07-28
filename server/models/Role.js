const { Schema, model } = require('mongoose');

const roleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    companyId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Company',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Role = model('Role', roleSchema);

module.exports = Role;
