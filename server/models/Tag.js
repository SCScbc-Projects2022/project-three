const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
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

const Tag = model('Tag', tagSchema);

module.exports = Tag;
