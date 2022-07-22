const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
  {
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
