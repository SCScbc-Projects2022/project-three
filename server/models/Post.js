const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    shiftTime: {
      type: Object,
      required: true,
    },
    additionalInfo: {
      type: String,
    },
    locationArr: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Location',
      },
    ],
    role: [
      {
        type: Schema.Types.String,
        ref: 'Role',
      },
    ],
    tags: [
      {
        type: Schema.Types.String,
        ref: 'Tag',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
