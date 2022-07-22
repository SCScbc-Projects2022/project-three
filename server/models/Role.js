const { Schema, model } = require('mongoose');

const roleSchema = new Schema(
  {
    companyId: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Company',
        }
    ],
    title: {
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
