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
    location: {
      type: String,
    },
    role: {
      type: String,
    },
    tags: [
      {
        type: String,
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
