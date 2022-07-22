const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
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

const Tag = model('Tag', tagSchema);

module.exports = Tag;
