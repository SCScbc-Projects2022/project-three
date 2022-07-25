const { Schema, model } = require('mongoose');
// location, role should be required
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
        type: Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
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
