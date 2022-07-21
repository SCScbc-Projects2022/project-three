const { Schema, model } = require('mongoose');

// role, start and end time, additional information, under which manager, location
// Tag: string

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
    tagId: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
